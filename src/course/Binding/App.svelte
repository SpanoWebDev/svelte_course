<script>
import Component from "./Component.svelte";
let value = ''

//function onInput(event) {
 //   spano = this.value
//}
let count;
</script>

<!--<input class="p-2 border border-r-4 border-black mx-5" on:input={onInput} value={spano}>-->

<!--<input class="p-2 border border-r-4 border-black mx-5" bind:value={value}>-->
<input class="p-2 border border-r-4 border-black mx-5" bind:value>

<div class="text-3xl">
    value:"{value}"
</div>
<button 
    class="bg-slate-500 text-2xl p-2 border border-r-4" 
    on:click={() => {value = 'spano ni mkali'}}
>
    Click me mofo
</button>
<div>
    <Component 
        bind:count
    />
    <button 
        on:click={() => {
            count = 0
        }} 
        class="p-4 text-3xl text-slate-50 bg-slate-500"
    >
    Click me
    </button>
    {count}
</div>