<script>
    import { onMount } from "svelte";

    export let color

    let initialColor = color

    onMount(() => {
        console.log(color);
    })
</script>

Color: {color} initialColor: {initialColor}