<script>
  import { getContext } from "svelte";
  import { key } from "./context";

    const color = getContext(key,'color')
</script>
<div style="color: {color}">GrandChildA</div>

