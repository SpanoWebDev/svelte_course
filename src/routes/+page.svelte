<script>
  import Parent from "../course/FowardingComponentEvents/components/Parent.svelte";
  import Component from "../components/Component.svelte";
  import ComponentEvents from "../components/ComponentEvents.svelte";
  import App from "../course/Binding/App.svelte";
  import BindGroup from "../course/BindGroup/BindGroup.svelte";
  import Bindthis from "../course/Bind:This/Bindthis.svelte";
  import ComponentLyfeCicle from "../course/ComponentLyfeCycle/ComponentLyfeCicle.svelte";
  import OnMount from "../course/onMount/OnMount.svelte";
  import If from "../course/If/If.svelte";
  import Each from "../course/Each/Each.svelte";
  import KeyedEach from "../course/KeyedEach/KeyedEach.svelte";
  import Await from "../course/Await/Await.svelte";
  import Key from "../course/KeyBlock/Key.svelte";
  import Context from "../course/Contextt/Context.svelte";

  let obj = {
    name: 'spn',
    email:'span.spn@spanyola'
  }
  let name = 'spano'
  // ComponentEvents
  function onSkillMoveChanged(event) {
    console.log('onSkillMoveChanged has been pressed',event.detail );
  }

  //ForwardingComponentEvents
  function onElementButtonClick(event) {
    console.log('onElementButtonClick',event.target.dataset.value);
  }
  function onComponentButtonClick(event) {
    console.log('In app.svelte:',event.detail);
  }
</script>

<!--Components in svelte-->
<div class="border-b border-slate-700">
  <Component name={obj.name} email={obj.email}/>
  <Component name={name} />
  <Component/>
</div>

<!--Components Events-->
<div class="border-b border-slate-700">
  <ComponentEvents
    name='Spano'
    status='Learning svelte'
    on:onSkillMoveChanged = {onSkillMoveChanged}
  />
  <ComponentEvents
    name='Spano again'
    status='Learning component events'
  />
</div>

<!--

  <script>

  <h1 class="text-5xl">Forwarding ComponentEvents</h1>
  <p>Event bubbling effect</p>ding events

-->

<div>
  <div>
    <Parent on:componentButtonClick={onComponentButtonClick}/>
  </div>

  <hr>

  Element:

  <div on:click={onElementButtonClick}>
    <div>
      <button class="p-2 bg-slate-500" data-value="button 1">elementClickMe 1</button>
      <button class="p-2 bg-slate-500" data-value="button 2">elementClickMe 2</button>
    </div>
  </div>
</div>

<!--
    Binding
-->
<div class="border-b border-slate-700">
  <App/>
</div>

<!--
  Bind Group
-->
<div>
  <BindGroup/>
</div>
<hr class="border-slate-900">

<div>
  <Bindthis/>
</div>

<!--
  Component Lyfe Cycle
-->
<div>
  <ComponentLyfeCicle/>
</div>

<!--
  onMount
-->
<hr class="border-slate-900">

<div>
  <OnMount/>
</div>

<!--
  If condition
-->
<hr class="border-slate-900">
<div>
  <If/>
</div>

<!--
  {#each} logic
-->
<hr class="border-slate-900">
<Each/>

<!--
  Keyed{#each} logic
-->
<hr class="border-slate-900">
<div>
  <KeyedEach/>
</div>
  <h1>Await Block</h1>
<hr class="border-slate-900">
<!--
  Await block
-->

<div class=" text-3xl ml-6">
  <Await/>
</div>
  <h1 class=" text-3xl" > Key Block</h1>
<hr class="border-slate-900">
<!--
  key block
-->

<div>
  <Key/>
</div>

<!--
  Context
-->

<hr class="border-slate-900">

<div>
  <Context/>
</div>