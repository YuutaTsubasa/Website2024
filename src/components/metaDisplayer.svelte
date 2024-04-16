<script lang="ts">
	import type { Tag } from "$lib/tag";
	import Datetime from "./datetime.svelte";
	import Tags from "./tags.svelte";

    export let createdTime: Date;
    export let tags: Tag[];

</script>

<li class="meta">
    <Datetime createdTime={createdTime} />
    <Tags tags={tags} />
</li>

<style>
    
.meta {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}
</style>