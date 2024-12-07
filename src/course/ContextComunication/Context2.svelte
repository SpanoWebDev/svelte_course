<script>
  import Parent from "./Parent.svelte";
  import { setContext } from "svelte";
   
    let colorObj = { color:"red" }
    let color = colorObj.color
    let count = 0
  


    setContext('color',color)
    setContext("count2",onClick)

   
    function onClick(params) {
        count ++
    }
</script>

<input type="color" bind:value={color}>

<div>
    {color}
</div>

<Parent on:click = {onClick}/>

Count : {count}


