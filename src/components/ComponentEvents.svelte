<script>
    import { createEventDispatcher } from "svelte";
    export let name = 'span'
    export let status = 'span'
    let skillPoint = 5

    const dispatch = createEventDispatcher();//Has to be at the top

    $:dispatch('onSkillMoveChanged', skillPoint)


    function decrementSkillPoint() {
        if (skillPoint > 0) {
            skillPoint --;
        }
    }
    function incrementSkillPoint() {
        skillPoint ++;
    }
</script>

<div>
    <h1 class="text-5xl">ComponentEvents</h1>
    <p class="text-2xl"> My name is {name} and am  {status}
    </p>
    <button class="px-10 py-3 bg-slate-300 mr-3" on:click={decrementSkillPoint}>
    -
    </button>
        {skillPoint}
    <button class="px-10 py-3 bg-slate-300 mr-3" on:click={incrementSkillPoint}>
    +
    </button>
</div>
