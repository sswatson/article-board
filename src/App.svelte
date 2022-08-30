<script>
	import { onMount } from 'svelte';
	import Board from './Board.svelte';
	let editMode = false;
	
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
	
</script>

<button
	on:click={addBoard}>
	new category
</button>

<input
	placeholder="tag for saved model..."
	bind:value={tag}/>

<button on:click={writeBoardState}>
	save
</button>

<button on:click={() => editMode = !editMode}>
	{#if editMode}
		done editing
	{:else}
		edit
	{/if}
</button>

<Board bind:columnItems={board} editMode={editMode}/>