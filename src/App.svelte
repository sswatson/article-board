<script>
	import { onMount } from 'svelte';
	import Board from './Board.svelte';
	import SavedModels from './SavedModels.svelte';
	let editMode = false;
	let showSavedModels = false;
	let savedModels = [];
	
	let board = [];

	let tag="";
	
	onMount(async () => {
		const res = await fetch("https://sswatson.firebaseio.com/raidocs/board.json");
		const { state } = await res.json();
		board = state.filter(Boolean).map(col => {
			if (col.items) return col;
			return {
				...col,
				items: [],
			}
		});
		console.log(board);
	})
	
	function addBoard() {
		board = [
			...board, 
			{
				id: board.map(col => col.id).reduce(
					(a, b) => Math.max(a, b), 0
				) + 1,
				name: "New",
				items: [],
			}
		];
	}

	async function writeBoardState() {
		if (tag === "") {
			alert("Please enter a tag to make your saved model easier to find later. You can re-use tags.");
			return;
		}
		const writeBoard = board.map((col, j) => ({...col, id: j}));
		console.log(writeBoard);
		const boardString = JSON.stringify(writeBoard);
		await fetch("https://sswatson.firebaseio.com/raidocs/board.json", {
			body: `{ "state": ${boardString} }`,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			method: "PUT"
		});
		
		const dateString = (new Date()).toISOString().replace(/[:\.]/g, '-');
		
		const res = await fetch(`https://sswatson.firebaseio.com/raidocs/board-history/${dateString}-${tag}.json`, {
			body: `{ "state": ${boardString}, "tag": "${tag}" }`,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			method: "PUT"
		});

	}
	
	async function getSavedModels() {
		const res = await fetch("https://sswatson.firebaseio.com/raidocs/board-history.json");
		const history = await res.json();
		savedModels = [...Object.keys(history)]
			.map(key => ({ key, ...history[key] }))
			.filter(obj => Boolean(obj.tag));
		console.log(savedModels);
	}

	$: if (showSavedModels) {
		getSavedModels();
	}

	function loadModel(key) {
		const matchingModels = savedModels.filter( model => model.key === key);
		if (matchingModels.length === 0) {
			alert("No matching model found");
			return;
		}
		const [model] = matchingModels;
		board = model.state;
		showSavedModels = false;
	}
	
</script>

<button
	on:click={addBoard}>
	new column
</button>

<input
	placeholder="tag for saved model..."
	bind:value={tag}/>

<button on:click={writeBoardState}>
	save this model
</button>

<button on:click={() => editMode = !editMode}>
	{#if editMode}
		done editing
	{:else}
		edit column titles
	{/if}
</button>

{#if showSavedModels}
	<button on:click={() => showSavedModels = false}>
		done
	</button>
{:else}
	<button on:click={() => showSavedModels = true}>
		view list of saved models
	</button>
{/if}

{#if showSavedModels}
	<SavedModels models={savedModels} {loadModel}/>
{:else}
	<Board bind:columnItems={board} editMode={editMode}/>
{/if}