<script>
  import KeyEachComponent from "./KeyEachComponent.svelte";

    let colors = [
        'red',
        'green',
        'blue'
    ]

    function addColors() {
        colors.splice(1,0,'yellow')
        colors.reverse()
        colors = colors
    }
</script>

<button class=" bg-slate-500 text-slate-950 p-5 ml-5" on:click={addColors}>Click Me</button>

<ul>
    {#each colors as color, index }
        <li>{color},(key: {color})</li>
        <KeyEachComponent {color}/>
    {/each}
</ul>