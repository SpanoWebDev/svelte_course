<script>
import { createEventDispatcher } from 'svelte';
import GrandChild from './GrantChild.svelte'

const dispatch = createEventDispatcher();

    function onComponentButtonClick(event) {
        console.log('in Child.svelte',event.detail);
        dispatch('componentButtonClick',event.detail)

    }
</script>

<!--Bubbling-->
<GrandChild on:componentButtonClick={onComponentButtonClick}/>