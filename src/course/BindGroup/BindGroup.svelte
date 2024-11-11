<script>
    let options = []
</script>

<!--
    <button class="bg-slate-500 p-4 " on:click={() => {
        option = [
            4,4,4
        ]
    }
}>
    reset
</button>
<div class="">
    <div>
        <label >
            1 <input type="checkbox" name="spn" bind:group={option} value="1">
        </label>
    </div>
    <div>
        <label >
            2 <input type="checkbox" name="spn" bind:group={option} value="2">
        </label>
    </div>
    <div>
        <label >
            3 <input type="checkbox" name="spn" bind:group={option} value="3">
        </label>
    </div>
</div>

<h2 class="text-2xl">
    Selected option : {option }
</h2>

        () => {
            option = [
                4,4,4
            ]
        }
    }>
        reset
    </button>
    <div class="">
        <div>
            <label >
                1 <input type="radio" name="spn" bind:group={option} value="1">
            </label>
        </div>
        <div>
            <label >
                2 <input type="radio" name="spn" bind:group={option} value="2">
            </label>
        </div>
        <div>
            <label >
                3 <input type="radio" name="spn" bind:group={option} value="3">
            </label>
        </div>
    </div>

    <h2 class="text-2xl">
        Selected option : {option }
    </h2>
-->
    <button class="bg-slate-500 p-4 " on:click={
        () => {
            options = [ 
                '2','3',
            ]
        }
    }>
     reset
    </button>
    <div class="">
        <div>
            <label >
                1 <input type="checkbox" name="spn" bind:group={options} value="1">
            </label>
        </div>
        <div>
            <label >
                2 <input type="checkbox" name="spn" bind:group={options} value="2">
            </label>
        </div>
        <div>
            <label >
                3 <input type="checkbox" name="spn" bind:group={options} value="3">
            </label>
        </div>
    </div>

    <h2 class="text-2xl">
        Selected option : {options }
    </h2>
