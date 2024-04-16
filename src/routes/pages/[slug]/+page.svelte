<script lang="ts">
	import Footer from '../../../components/footer.svelte';
	import MetaDisplayer from '../../../components/metaDisplayer.svelte';
	import Navigator from '../../../components/navigator.svelte';

    export let data;
</script>

<section class="main">
    <Navigator/>
    <article class="article">
        <h1>{data.meta.title}</h1>
        <MetaDisplayer createdTime={data.meta.published} tags={data.meta.tags} />
        <section class="content">
            <img src={data.meta.thumbnail} alt={data.meta.title} />
            <svelte:component this={data.content}/>
        </section>
    </article>
    <Footer/>
</section>

<style>
    .main {
        width: 100vw;
        margin: 0;
        padding-top: 100px;
        background: 
            linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)),
            radial-gradient(red, blue, purple) fixed;
    }

    .article {
        width: 80%;
        margin: 0 auto 20px auto;

        & h1 {
            text-align: center;
            font-size: 4rem;
            color: black;
            text-shadow: rgb(136, 184, 240) 5px 5px 3px;
        }

        & .meta {
            font-size: 1.5rem;
        }

        & .content {
            background: white;
            margin-top: 10px;
            padding: 25px 150px;
            border-radius: 10px 10px 10px;
            box-shadow: gray 15px 15px 15px;
            font-size: 1.5rem;
            
            & img {
                display: block;
                margin: 5px auto;
                max-width: 95%;
            }
        }
    }

</style>