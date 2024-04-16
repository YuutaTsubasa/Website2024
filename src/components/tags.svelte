<script lang="ts">
	import type { Tag } from "$lib/tag";
	import { TagToColor } from "$lib/tagToColor";
    export let tags : Tag[];
</script>

<ul class="tags">
    {#each tags as tag}
    <li class="tag" style="background-color: hsl({TagToColor.get(tag)?.h}, {TagToColor.get(tag)?.s}, {TagToColor.get(tag)?.l})">{tag}</li>
    {/each}
</ul>

<style>
.tags {
    list-style-type: none;
    display: flex;
    font-size: 0.65em;
    align-items: end;
    gap: 5px;
    padding: 0px;
    margin: 0;

    & .tag {
        color: white;
        border-radius: 50px 50px 50px;
        padding: 2px 10px;
        font-weight: bolder;
    }
}
</style>