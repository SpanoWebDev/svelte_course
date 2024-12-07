<script>
  import { key } from "./context";
  import GrandChildA from "./GrandChildA.svelte";
  import { setContext } from "svelte";

  setContext(key,"blue")

</script>

<GrandChildA/>