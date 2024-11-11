<svelte:options accessors/>
<script>
    export let count = 0

    export const reset = () => {
        count = 0
    //    console.log(element.count);
    }

    function inc(){
        count ++
    }
</script>

<button on:click={inc} class="bg-slate-700 p-3 text-slate-200">{count}</button>

