<script>
	import { onMount } from 'svelte';
	import Board from './Board.svelte';
	
	let board = [];
	
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
		
		const res = await fetch(`https://sswatson.firebaseio.com/raidocs/board-history/${dateString}.json`, {
			body: `{ "state": ${boardString} }`,
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

<button on:click={writeBoardState}>
	save
</button>

<Board bind:columnItems={board}/>