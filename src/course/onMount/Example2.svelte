<script>
    import { onMount } from "svelte";

    let user

    onMount(()=>{
        let controller = new AbortController();

        const signal = controller.signal;

        fetch(`https://dog.ceo/api/breeds/image/random`,{signal})
            .then((response) => response.json())
            .then(({message}) => {user = message})

        return () => {
            controller.abort
        }
    })
</script>

<img {user} alt="dog" class=" w-10">