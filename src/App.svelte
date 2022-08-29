<script>
	import { onMount } from 'svelte';
	import Board from './Board.svelte';
	
    import { flip } from 'svelte/animate';
    import { dndzone } from 'svelte-dnd-action';
    const flipDurationMs = 300;
    function handleDndConsiderColumns(e) {
        board = e.detail.items;
    }
    function handleDndFinalizeColumns(e) {
        board = e.detail.items;
    }
    function handleDndConsiderCards(cid, e) {
        const colIdx = board.findIndex(c => c.id === cid);
        board[colIdx].items = e.detail.items;
        board = [...board];
    }
    function handleDndFinalizeCards(cid, e) {
        const colIdx = board.findIndex(c => c.id === cid);
        board[colIdx].items = e.detail.items;
        board = [...board];
    }
    function handleClick(e) {}
	
	let board = [];
	let originalBoard = [];
	
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
		originalBoard = board.slice();
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
	
	function deleteColumn(id) {
		board = board.filter(item => item.id !== id);
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

<section class="board" use:dndzone={{items:board, flipDurationMs, type:'columns'}} on:consider={handleDndConsiderColumns} on:finalize={handleDndFinalizeColumns}>
    {#each board as column (column.id)}
        <div class="column"
             animate:flip="{{duration: flipDurationMs}}">
            <div class="column-title">
							<input 
								value={column.name}
								on:change={e => column.name = e.target.value}/>
							{#if column.items.length === 0}
								<button 
									on:click={() => deleteColumn(column.id)}
									class="delete-button">
									[delete]
								</button>
							{/if}
						</div>
            <div class="column-content" 
								 use:dndzone={{items:column.items, flipDurationMs}}
                 on:consider={(e) => handleDndConsiderCards(column.id, e)} 
								 on:finalize={(e) => handleDndFinalizeCards(column.id, e)}>
                {#each column.items as item (item.id)}
									<div class="card" 
											 animate:flip="{{duration: flipDurationMs}}" on:click={handleClick}>
										{ item.name }
										<div class="description">
											{ item.description }
										</div>
									</div>
	              {/each}
            </div>
        </div>
    {/each}
</section>

<style>
    .board {
        height: calc(100vh - 100px);
        width: 100%;
        padding: 0.5em;
        margin-bottom: 40px;
    }
    .column {
        height: 100%;
        width: 250px;
        padding: 0.5em;
        margin: 0.5em;
        float: left;
				border-radius: 4px;
				background-color: #dbeafe;
        /*Notice we make sure this container doesn't scroll so that the title stays on top and the dndzone inside is scrollable*/
        overflow-y: hidden;
    }
    .column-content {
        height: calc(100% - 60px);
        /* Notice that the scroll container needs to be the dndzone if you want dragging near the edge to trigger scrolling */
        overflow-y: scroll;
			display: flex;
			flex-direction: column;
			gap: 12px;
    }
    .column-title {
        margin-bottom: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card {
			width: 225px;
			background-color: #2563eb;
			color: white;
			padding: 12px;
			border-radius: 10px
		}
	
		.description {
			font-size: small;
			color: #FAFAFA;
			margin-top: 6px;
		}
	
	.delete-button {
		font-size: small;
		background-color: transparent;
		border: none;
	}
</style>
