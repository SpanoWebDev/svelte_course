<script>
    let condition1 = false
    let condition2 = false

    function toggleCondition1(){
        condition1 = !condition1
    }
    function toggleCondition2(){
        condition2 = !condition2
    }
</script>

<input type="checkbox" bind:checked={condition1}>
<input type="checkbox" bind:checked={condition2}>
{#if condition1 && condition2 }
    <button class="p-2 bg-slate-700 text-slate-200 m-5" on:click={toggleCondition1}>condition1: {condition1}</button>
    <button class="p-2 bg-slate-700 text-slate-200 m-5" on:click={toggleCondition2}>condition2: {condition2}</button>
{/if}