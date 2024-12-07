<script>
    import { getContext } from "svelte";
    import { key } from "./context";

    const color = getContext(key,"color")
</script>

<div>GrandChildB : {color}</div>