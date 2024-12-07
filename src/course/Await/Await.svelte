<script>
    let selectedBreed
    const breeds = ['affenpischer','african','airedale','shepherd']

    let imageSrc
    let hasError = false
    let isFetching = false
$:promise = getRandomDogImage(selectedBreed)//reactive statement
//$: fetchDogImage(selectedBreed)

    // function fetchDogImage(breed) {
    //     hasError = false
    //     isFetching = true
    //     fetch(`https://dog.ceo/api/breeds/${breed}/image/random/`) 
    //     //https://dog.ceo/api/breeds/image/random
    //         .then(response => response.json())   
    //         .then(obj => {imageSrc = obj.message})
    //         .catch(() => {
    //             hasError = true
    //         })
    //         .finally(() =>{
    //             isFetching = false
    //         })
    // }

    //God bless you

    // async function fetchDogImageUsingAwait(breed) {
    //     try {
    //         hasError = false
    //         isFetching = true
    //         imageSrc = null

    //         const response = await
    //     fetch(`https://dog.ceo/api/breeds/${breed}/image/random/`) 
            
    //         const obj = await response.json()
    //         imageSrc = obj.message

    //     } catch (error) {
    //         hasError = true
    //     }finally{
    //         isFetching = false
    //     }
    // }

    async function getRandomDogImage(breed) {
        const response = await
    fetch(`https://dog.ceo/api/breeds/${breed}/image/random/`) 
        const obj = await response.json()
        return obj
    }

</script>

<select bind:value={selectedBreed}>
    {#each breeds as breed }
        <option value={breed}>{breed}</option>
    {/each}
</select>

Selected breed :{selectedBreed}


<div>
    {#await  promise}
        loading ...
    {:then obj}
        <img src={obj.message} alt="dog">   
    {:catch error}
        Oops something's wrong
    {/await}
</div>

<!-- <div>
{#if hasError }
    Oops something's wrong
{:else if isFetching}
    loading ...
{:else}
    <img src="imageSrc" alt="dog">
{/if}
</div> -->



