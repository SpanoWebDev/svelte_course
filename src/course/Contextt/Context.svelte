<script>
  import { setContext } from "svelte";
  import {key} from "./context"

  import Child1 from "./Child1.svelte";
  import Child2 from "./Child2.svelte";

  setContext(key, 'red')

  //let color = "red"

</script>

<div class=" border-spacing-1 border-solid border-slate-900">
    Parent A
    <Child1 />
    <Child2 />
</div>