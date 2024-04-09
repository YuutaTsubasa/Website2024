<script lang="ts">
    import type { Item } from "$lib/item";
	import { TagToColor } from "$lib/tagToColor";
	import { get } from "svelte/store";

    export let item : Item;
</script>

<div class="listItem">
    <div class="listItemImage">
        <img src={item.thumbnailUrl} alt={item.title}/>
    </div>
    <ul class="listItemDescription">
        <li class="meta">
            <div class="time">{item.createdTime.toString().replaceAll("/", ".")}</div>
            <ul class="tags">
                {#each item.tags as tag}
                <li class="tag" style="background-color: hsl({TagToColor.get(tag)?.h}, {TagToColor.get(tag)?.s}, {TagToColor.get(tag)?.l})">{tag}</li>
                {/each}
            </ul>
        </li>
        <li><h3>{item.title}</h3></li>
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

            & .meta {
                display: flex;
                justify-content: space-between;
                margin-top: 15px;

                & .time {
                    /* background-color: cornflowerblue; */
                    /* color: white; */
                    color: rgb(0, 0, 97);
                    font-size: 1em;
                    /* padding: 2px 10px; */
                    /* border-radius: 10px 10px 10px; */
                    border-bottom: 3px solid rgb(0, 0, 97);

                    font-family: "Bebas Neue", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                }

                & .tags {
                    list-style-type: none;
                    display: flex;
                    font-size: 0.65em;
                    align-items: end;
                    gap: 5px;
                    padding: 0px;

                    & .tag {
                        color: white;
                        border-radius: 50px 50px 50px;
                        padding: 2px 10px;
                        font-weight: bolder;
                    }
                }
            }
            
            & h3 {
                margin: 0;
                margin-top: 5px;
                font-size: 0.8em;
            }

        }
    }
</style>