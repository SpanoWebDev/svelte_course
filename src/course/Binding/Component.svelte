<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()
    $:dispatch('countChanged', {count})
    export let count = 0;
</script>

<button 
    on:click={() => {
        count ++
    }}
    class="p-4 bg-slate-500 text-3xl text-slate-100"
>
 Count
</button>
<div class="text-2xl">
    count : {count}
</div>

