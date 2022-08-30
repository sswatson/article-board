<script>
  export let columnItems;
  export let editMode;
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

  function addArticle(id) {
    const colIdx = columnItems.findIndex((c) => c.id === id);
    columnItems[colIdx].items = [
      ...columnItems[colIdx].items,
      {
        name: "New",
        id: "New",
        description: "description",
      },
    ];
    columnItems = [...columnItems];
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
        {#if editMode}
          <input
            value={column.name}
            on:change={(e) => (column.name = e.target.value)}
          />
        {:else}
          <div class="column-name">
            {column.name}
          </div>
        {/if}
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
            {#if editMode}
              <button
                on:click={() => {
                  column.items = column.items.filter(
                    (i) => i.id !== item.id
                  );
                }}
                class="card-delete-button">
                del
              </button>
            {/if}
            {#if editMode}
              <input value={item.name} on:change={(e) => (item.name = item.id = e.target.value)} />
            {:else}
              { item.name }
            {/if}
            <div class="description">
              {#if editMode}
                <textarea value={item.description} on:change={(e) => (item.description = e.target.value)}/>
              {:else}
                { item.description }
              {/if}
            </div>
          </div>
        {/each}
        <div class="button-container">
          <button class="add-button" on:click={() => addArticle(column.id)}> + </button>
        </div>
      </div>
    </div>
  {/each}
</section>

<style>
  .board {
    height: calc(100vh - 90px);
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

  .column-name {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    color: #2d3748;
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
    margin-bottom: 0.2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    position: relative;
    width: 175px;
    background-color: #2563eb;
    color: white;
    padding: 12px;
    border-radius: 10px;
  }

  .description {
    font-size: 10px;
    color: #fafafa;
    margin-top: 6px;
  }

  .delete-button {
    font-size: 11px;
    background-color: transparent;
    border: none;
  }

  .card-delete-button {
    position: absolute;
    top: 4px;
    right: 4px;
    color: white;
    background-color: transparent;
    padding: 1px;
    border: none;
    cursor: pointer;
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .add-button {
    background-color: transparent;
    border: 1px solid #2563eb;
    padding-top: 2px;
    padding-bottom: 2px;
    width: 50%;
    color: #2563eb;
  }

  .card input, .card textarea {
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: transparent;
    color: white;
    padding: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
  }
</style>
