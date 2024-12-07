<script>
    import { getContext } from "svelte";

    const colorObj = getContext('color')
    const color = colorObj.color

    const onClick = getContext('count2')
</script>

<div style="color:{color}">
    Child1 : {color}
    <button class=" bg-slate-500 p-2 ml-4" on:click={onClick}>Click me</button>
</div>
