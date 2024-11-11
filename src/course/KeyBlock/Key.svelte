<script>
    import { fade } from "svelte/transition";
    import App from "./app.svelte";
    let count = 0
</script>

{#key count }
   <input placeholder="Enter digits"> 
   <div in:fade>{count}</div>
{/key}
<button class=" border-spacing-4 p-4 ml-4 bg-slate-700 text-slate-200" on:click={() => count ++}>{count}</button>