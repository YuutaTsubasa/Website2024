<script lang="ts">
    import Navigator from "../components/navigator.svelte";
	import List from "../components/list.svelte";
    import type { MarkdownFile } from "../lib/markdownFile";
    import type { Item } from "../lib/item";
    import { Tag } from "../lib/tag";
	import Footer from "../components/footer.svelte";
	import type { Metadata } from "$lib/metadata";
	import { Utils } from "$lib/utils";

    const paths : Record<string, MarkdownFile> = import.meta.glob("/src/posts/*.md", {eager: true});
    const files : [string, MarkdownFile][] = Object.entries(paths) as [string, MarkdownFile][];
    const items : Item[] = files
        .map(file => { 
            return {
                id: Utils.convertPathToId(file[0]),
                thumbnailUrl: file[1].metadata.thumbnail,
                title: file[1].metadata.title,
                createdTime: file[1].metadata.published,
                author: file[1].metadata.author,
                tags: file[1].metadata.tags
            };
        });
    $: newsItems = items.sort((a, b) => new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()).slice(0, 3);
</script>

<section class="main">
    <Navigator/>
    <section class="startup">
    </section>
    <section class="about">
        <h1>關於</h1>
        為台灣個人勢 Vtuber、盔甲正太系程式 Vtuber，語言主要以中文為主，直播內容以程式、唱歌、遊戲、雜談為主。
    </section>
    <section class="news">
        <h1>最新消息</h1>
        <List items={newsItems}/>
    </section>
    <Footer></Footer>
</section>


<style>
    .main {
        background: 
            linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)),
            radial-gradient(red, blue, purple) fixed;
    }

    .startup {
        padding: 0;
        margin: 0;
        width: 100vw;
        height: 100vh;
        background: url("/images/startup.webp") center center no-repeat;
        background-size: cover;
    }

    .about, .news {
        padding: 0;
        margin: 0 auto;
        width: 80vw;
        min-height: 20vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-size: 1.5rem;
        
        & h1 {
            text-align: left;
            font-size: 2rem;
        }
    }
</style>