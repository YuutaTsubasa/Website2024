<script lang="ts">
    import Navigator from "../components/navigator.svelte";
	import List from "../components/list.svelte";
    import type { MarkdownFile } from "../lib/markdownFile";
    import type { Item } from "../lib/item";
    import { Tag } from "../lib/tag";
	import Footer from "../components/footer.svelte";

    const paths = import.meta.glob("/src/posts/*.md", {eager: true});
    const files : MarkdownFile[] = Object.values(paths) as MarkdownFile[];
    const items : Item[] = files
        .map(file => { 
            return {
                thumbnailUrl: file.metadata.thumbnail,
                title: file.metadata.title,
                createdTime: file.metadata.published,
                author: file.metadata.author,
                tags: file.metadata.tags
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