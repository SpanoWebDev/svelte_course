<script>
  import Componet1 from "./Componet1.svelte";

  let condition

</script>

<input type="checkbox" bind:checked={condition}>

{#if condition }
    <Componet1/>
{/if}
