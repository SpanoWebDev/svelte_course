<script>
//    import { onMount } from "svelte";

  import ComponentThis from "./ComponentThis.svelte";

    let element;
    
    function reset(){
        element.reset()
    }

//    onMount(() => {
//        console.log(element);
//    })
</script>

<!--
    <input bind:this={element} class="border border-slate-900 border-r-4 h-9 ml-5">
-->
    <ComponentThis bind:this={element}/>
<button class="bg-slate-700 px-7 py-2 text-slate-300 text-2xl ml-4" on:click={reset}>reset</button>

