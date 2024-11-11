<script>
    let colors = [
        {name:"red", hex:"#f00"},
        {name:"green", hex:"#0f0"},
        {name:"blue", hex:"00f"}
    ]
    
//    for (const color of colors) {
//        console.log(color );
//    }
</script>
<!--
    <ul class="text-2xl text-slate-900 ml-5">
        <li>{colors[0]}</li>
        <li>{colors[1]}</li>
        <li>{colors[2]}</li>
    </ul>
-->

<ul>
    {#each colors as color, index }
        <li>{color.name} - {index}</li>
    {:else}
    <li>The list is empty</li>
    {/each}
</ul>


