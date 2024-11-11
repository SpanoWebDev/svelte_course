<script>
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();

function onClick1(){
    dispatch('componentButtonClick','button1')
}
function onClick2(){
    dispatch('componentButtonClick','button2')
}
</script>

<button class="p-4 bg-slate-500" on:click={onClick1}>
    click me 1
</button>
<button class="p-4 bg-slate-500" on:click={onClick2}>
    click me 2
</button>