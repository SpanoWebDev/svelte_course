<script>
    import Child from "./Child.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function onComponentButtonClick(event) {
        console.log('in Parent.svelte', event.detail);
        dispatch('componentButtonClick',event.detail)
    }
</script>
<!--Bubbling-->
<Child on:componentButtonClick = {onComponentButtonClick}/>