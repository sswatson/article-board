

<script>
  export let models;
  export let loadModel;
</script>

<h1>Saved Models</h1>

<div class="buttons-container">
  {#each models as model}
    <div>
      <button on:click={() => {loadModel(model.key)}}>
        { model.tag } (at { model.key.split("-").slice(0, -1).join("-").slice(0, -1) })
      </button>
    </div>
  {/each}
</div>

<style>
  .buttons-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>