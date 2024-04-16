<script lang="ts">
	import ListItem from "./listItem.svelte";
    import type { Item } from "$lib/item";

    export let items : Item[];
</script>

<ul>
    {#each items as item}
        <li><ListItem {item}/></li>
    {/each}
</ul>

<style>
    ul {
        display: grid;
        list-style-type: none;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        justify-content: space-between;
        gap: 50px;
    }
</style>