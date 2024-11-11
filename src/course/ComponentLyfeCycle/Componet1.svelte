<script>
import { onDestroy,onMount,beforeUpdate,afterUpdate } from "svelte";
import markUpdate from "./markUpdate";

const action = markUpdate()

let count = 0

onMount(() => {
    console.log("onMount");
})
onDestroy(() => {
    console.log("onDestroy");
})
beforeUpdate(() => {
    console.log("beforeUpdate");
})
afterUpdate(() => {
    console.log("afterUpdate");
})

function incr(){
    count ++
}
</script>
<button 
    use:action 
    on:click={incr}
    class="bg-slate-400 p-4 text-slate-900 text-2xl"
>
    click me
</button>
{count}

