<script>
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import tooltip from "$lib/ui/tooltip";
	import Icon from "$lib/ui/Icon.svelte";

  const topics = [
    {key: "population", label: "Population"},
    {key: "density", label: "Population density"},
    {key: "agemed", label: "Average (median) age"},
    {key: "age", label: "Age profile"},
    {key: "sex", label: "Sex"},
    {key: "ethnicity", label: "Ethnicity"},
    {key: "religion", label: "Religion"},
    {key: "marital", label: "Marital status"},
    {key: "qualification", label: "Highest qualification"},
    {key: "grade", label: "Social grade"},
    {key: "economic", label: "Economic activity"},
    {key: "travel", label: "Travel to work"},
    {key: "hours", label: "Hours worked"},
    {key: "housing", label: "Housing type"},
    {key: "tenure", label: "Housing tenure"},
    {key: "bedrooms", label: "Number of bedrooms"},
    {key: "occupancy", label: "Persons per bedroom"},
  ];
	
	let state = {
		mode: "move",
		radius: 5,
		select: "add",
		name: "",
		showSave: false,
		topics: [topics[0]],
		topicsExpand: false,
		topicsFilter: ""
	}
	
	function filterTopics(topics, selected, regex, expand) {
		let topics_start = [];
		let topics_end = [];
		topics.forEach(topic => {
			if (selected.includes(topic)) {
				topics_start.push(topic);
			} else {
				topics_end.push(topic);
			}
		});
		if (regex) topics_end = topics_end.filter(t => regex.test(t.label));
		return [...topics_start, ...topics_end];
	}
	
	function highlight(str, regex) {
		return regex ? str.replace(regex, "<mark>$&</mark>") : str;
	}
	
	$: regex = state.topicsFilter.length > 1 ? new RegExp(state.topicsFilter, 'i') : null;
</script>

<nav>
	<div class="nav-left">
		<button class="text" on:click={() => goto(`${base}/draw-new`)}>
			<Icon type="chevron" rotation={180}/><span>Edit area</span>
		</button>
	</div>
	<div class="nav-right">
		<button title="{state.showSave ? 'Close save options' : 'Save selected area'}" use:tooltip on:click={() => state.showSave = !state.showSave} class:active={state.showSave}>
			<Icon type="{state.showSave ? 'add' : 'download'}" rotation="{state.showSave ? 45 : 0}"/>
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
{/if}
<div class="container">
	<aside class="topics-box">
		<h2>Name your area</h2>
		<input type="text" bind:value={state.name} placeholder="Type a name"/>
		<h2>Select topics</h2>
		<input type="text" placeholder="Type to filter" bind:value={state.topicsFilter}>
		{#each filterTopics(topics, state.topics, regex, state.topicsExpand) as topic, i}
		<label style:display="{i < 6 || state.topicsExpand ? null : 'none'}">
			<input type="checkbox" bind:group={state.topics} name="topics" value={topic}>
			{@html highlight(topic.label, regex)}
		</label>
		{/each}
		{#if !regex}
		<button on:click={() => state.topicsExpand = !state.topicsExpand}>
			{state.topicsExpand ? 'Show fewer' : `Show ${topics.length - 6} more`}
		</button>
		{/if}
	</aside>
	<article class="profile">
		<h2>Profile preview</h2>
    <div class="embed"></div>
    <div class="embed-actions">
      <button>Show Embed code</button>
      <button>Download PNG</button>
      <button>Download Data</button>
    </div>
	</article>
</div>

<style>
  .profile {
    flex-grow: 1;
  }
  .embed {
    display: block;
    width: 100%;
    height: 400px;
    margin-bottom: 10px;
    background-color: lightgrey;
  }
</style>