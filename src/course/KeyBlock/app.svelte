<script>
    import Chat from "./Chat.svelte";
    let friends = [
        "stevo",
        "kevo",
        "paul",
        "saul",
        "tevez"
    ]

    let selectedFriend = friends[2]
</script>

<div>
    <ul>
        {#each friends as friend }
           <li>
            <label class:selected = {selectedFriend === friend}>
                <input 
                    type="radio" 
                    bind:group={selectedFriend} 
                    value={friend}
                >
                {friend.name}
            </label>
           </li>
        {/each}
    </ul>
    <div>
        <Chat friend = {selectedFriend}/>
    </div>
</div>
