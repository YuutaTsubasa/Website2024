<script lang="ts">
    import type { Item } from "$lib/item";
	import { TagToColor } from "$lib/tagToColor";
	import { get } from "svelte/store";
	import Tags from "./tags.svelte";
	import Datetime from "./datetime.svelte";
	import MetaDisplayer from "./metaDisplayer.svelte";

    export let item : Item;
</script>

<div class="listItem">
    <div class="listItemImage">
        <img src={item.thumbnailUrl} alt={item.title}/>
    </div>
    <ul class="listItemDescription">
        <MetaDisplayer createdTime={item.createdTime} tags={item.tags} />
        <li><h3><a href={`/pages/${item.id}/`}>{item.title}</a></h3></li>
    </ul>
</div>

<style>
    .listItem {
        & .listItemImage{
            width: 100%;
            aspect-ratio: 16 / 9;
            background-color: white;
            border-radius: 20px 20px 20px;

            & img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: contain;
                border-radius: 20px 20px 20px;
            }
        }

        & .listItemDescription {
            list-style-type: none;
            padding: 0;
            
            & h3 {
                margin: 0;
                margin-top: 5px;
                font-size: 0.8em;
            }

        }
    }
</style>