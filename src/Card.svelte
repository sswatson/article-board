
<script>

  import ColorPicker from './ColorPicker.svelte';

  export let column;
  export let item;

  let editMode;
</script>


<div
  class="card"
  style={ item.color ? `background-color: ${item.color}` : "" }
>
  <button
    on:click={() => {
      editMode = !editMode;
    }}
    class="card-edit-button"
    >
    {#if editMode} 
      save
    {:else}
      edit
    {/if}
  </button>
  {#if editMode}
    <button
      on:click={() => {
        column.items = column.items.filter((i) => i.id !== item.id);
      }}
      class="card-delete-button"
    >
      del
    </button>
  {/if}
  {#if editMode}
    <input
      value={item.name}
      on:change={(e) => (item.name = item.id = e.target.value)}
    />
  {:else}
    {item.name}
  {/if}
  <div class="description">
    {#if editMode}
      <textarea
        value={item.description}
        on:change={(e) => (item.description = e.target.value)}
      />
    {:else}
      {item.description}
    {/if}
  </div>
  {#if editMode}
    <ColorPicker
      bind:value={item.color}
      />
  {/if}
</div>


<style>
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

  .card-edit-button {
    position: absolute;
    bottom: 2px;
    right: 2px;
    color: white;
    background-color: transparent;
    padding: 1px;
    border: none;
    cursor: pointer;
    font-size: 8px;
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