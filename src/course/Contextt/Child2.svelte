<script>
    import { setContext,getContext } from "svelte";
    import {key} from "./context"
    import GrandChildA from "./GrandChildA.svelte";

    const color = getContext(key)

    setContext(key,"green")
</script>

<div>
    Child2 : {color}
</div>
<GrandChildA/>