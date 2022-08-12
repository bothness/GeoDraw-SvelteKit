<script>
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import tooltip from "$lib/ui/tooltip";
	import Select from "$lib/ui/Select.svelte";
	import Slider from "$lib/ui/Slider.svelte";
	import Icon from "$lib/ui/Icon.svelte";

  const modes = [
    {key: "move", label: "Pan and zoom"},
    {key: "polygon", label: "Draw a polygon"},
    {key: "radius", label: "Draw a radius"},
    {key: "select", label: "Click to select"}
  ];
	
	let state = {
		mode: "move",
		radius: 5,
		select: "add",
		name: "",
		showSave: false,
		topics: [],
		topicsExpand: false,
		topicsFilter: ""
	}
	
	$: showTray = ["polygon", "radius"].includes(state.mode);
</script>

<nav>
	<div class="nav-left">
		{#each modes as mode}
		<label class:active={state.mode == mode.key} title="{mode.label}" use:tooltip>
			<input type="radio" bind:group={state.mode} name="mode" value={mode.key}/>
			<Icon type="{mode.key}"/>
		</label>
		{/each}
	</div>
	<div class="nav-right">
		<button title="Undo last action" disabled use:tooltip>
			<Icon type="undo"/>
		</button>
		<button class="alert" title="Clear all areas" use:tooltip>
			<Icon type="clear"/>
		</button>
		<button title="{state.showSave ? 'Close save options' : 'Save selected area'}" use:tooltip on:click={() => state.showSave = !state.showSave} class:active={state.showSave}>
			<Icon type="{state.showSave ? 'add' : 'download'}" rotation="{state.showSave ? 45 : 0}"/>
		</button>
		<button class="text confirm" on:click={() => goto(`${base}/build-new`)}>
			<span>Build profile</span><Icon type="chevron"/>
		</button>
	</div>
</nav>
{#if state.showSave}
<nav class="tray">
	<div/>
	<div class="save-buttons">
		<input type="text" bind:value={state.name} placeholder="Type a name"/>
		<button class="text">
			<Icon type="download"/><span>Save area codes</span>
		</button>
		<button class="text">
			<Icon type="download"/><span>Save boundary</span>
		</button>
	</div>
</nav>
{:else if showTray}
<nav class="tray">
	{#if state.mode == 'radius'}
	<div class="slider">
		<span>Radius</span>
		<Slider bind:value={state.radius}/>
		<input type="text" bind:value="{state.radius}"/>km
	</div>
	{/if}
	<div class="select-mode">
		<span>Selection mode</span>
		<label class:active={state.select == 'add'} title="Add to selection" use:tooltip>
			<input type="radio" bind:group={state.select} name="select" value="add"/>
			<Icon type="add"/>
		</label>
		<label class:active={state.select == 'subtract'} title="Subtract from selection" use:tooltip>
			<input type="radio" bind:group={state.select} name="select" value="subtract"/>
			<Icon type="subtract"/>
		</label>
	</div>
</nav>
{/if}
<div id="map"></div>
<aside class="info-box" style:top="{showTray || state.showSave ? 146 : 104}px">
	<div class="search">
		<Select mode="search" placeholder="Find an area or postcode"/>
		<button title="Upload a saved area" use:tooltip>
			<Icon type="upload"/>
		</button>
	</div>
	<div class="message">
		Zoom in to start drawing a custom area.
	</div>
</aside>