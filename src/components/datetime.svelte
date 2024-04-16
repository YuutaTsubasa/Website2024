<script lang="ts">
    export let createdTime: Date;

</script>

<div class="datetime">{createdTime.toString().replaceAll("/", ".")}</div>

<style>
.datetime {
    /* background-color: cornflowerblue; */
    /* color: white; */
    color: rgb(0, 0, 97);
    font-size: 1em;
    /* padding: 2px 10px; */
    /* border-radius: 10px 10px 10px; */
    display: flex;
    align-items: flex-end;
    border-bottom: 3px solid rgb(0, 0, 97);

    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
}
</style>