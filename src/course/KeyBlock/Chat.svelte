<script>
   

    export let friend
    let name = friend.name
    message = ''

    let chat = []
    let loading = false

    loadChat(name)

    async function loadChat(name) {
       loading = true
       chat = await fetchChat(name) 
       loading = false
    }
</script>

<div>
    <ul>
        kite
    </ul>
</div>