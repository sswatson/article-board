<script>
  export let columnItems;
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  const flipDurationMs = 300;
  function handleDndConsiderColumns(e) {
    columnItems = e.detail.items;
  }
  function handleDndFinalizeColumns(e) {
    columnItems = e.detail.items;
  }
  function handleDndConsiderCards(cid, e) {
    const colIdx = columnItems.findIndex((c) => c.id === cid);
    columnItems[colIdx].items = e.detail.items;
    columnItems = [...columnItems];
  }
  function handleDndFinalizeCards(cid, e) {
    const colIdx = columnItems.findIndex((c) => c.id === cid);
    columnItems[colIdx].items = e.detail.items;
    columnItems = [...columnItems];
  }
  function handleClick(e) {}

  function deleteColumn(id) {
    columnItems = columnItems.filter((item) => item.id !== id);
  }
</script>

<section
  class="board"
  use:dndzone={{ items: columnItems, flipDurationMs, type: "columns" }}
  on:consider={handleDndConsiderColumns}
  on:finalize={handleDndFinalizeColumns}
>
  {#each columnItems as column (column.id)}
    <div class="column" animate:flip={{ duration: flipDurationMs }}>
      <div class="column-title">
        <input
          value={column.name}
          on:change={(e) => (column.name = e.target.value)}
        />
        {#if column.items.length === 0}
          <button
            on:click={() => deleteColumn(column.id)}
            class="delete-button"
          >
            [delete]
          </button>
        {/if}
      </div>
      <div
        class="column-content"
        use:dndzone={{ items: column.items, flipDurationMs }}
        on:consider={(e) => handleDndConsiderCards(column.id, e)}
        on:finalize={(e) => handleDndFinalizeCards(column.id, e)}
      >
        {#each column.items as item (item.id)}
          <div
            class="card"
            animate:flip={{ duration: flipDurationMs }}
            on:click={handleClick}
          >
            {item.name}
            <div class="description">
              {item.description}
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>

<style>
  .board {
    height: calc(100vh - 70px);
    width: 100%;
    padding: 0.5em;
    margin-bottom: 40px;
  }
  .column {
    height: 100%;
    width: 200px;
    padding: 0.5em;
    margin: 0.5em;
    float: left;
    border-radius: 4px;
    background-color: #dbeafe;
    /*Notice we make sure this container doesn't scroll so that the title stays on top and the dndzone inside is scrollable*/
    overflow-y: hidden;
  }
  .column-content {
    height: calc(100% - 40px);
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
    width: 175px;
    background-color: #2563eb;
    color: white;
    padding: 12px;
    border-radius: 10px;
  }

  .description {
    font-size: small;
    color: #fafafa;
    margin-top: 6px;
  }

  .delete-button {
    font-size: small;
    background-color: transparent;
    border: none;
  }
</style>
