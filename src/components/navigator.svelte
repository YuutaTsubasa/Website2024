<nav>
    <div class="logo">
        <img src="/images/logo.webp" alt="悠太翼"/>
    </div>

    <ul class="list">
        <li>首頁</li>
        <li>直播存檔</li>
        <li>程式作品</li>
        <li>翻唱曲集</li>
        <li>活動合作</li>
        <li>翼友作品</li>
    </ul>
</nav>

<style>
    nav {
        width: 100vw;
        height: 80px;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(15px);
        padding-right: 30px;
        position: fixed;
        top: 0;

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;

        & div {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;

            & img {
                padding: 0 50px;
                height: 95%;
            }
        }

        & ul {
            background-color: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(15px);
            border: 2px solid white;
            border-radius: 50px 50px;
            height: 50%;
            display: flex;
            list-style-type: none;
            padding: 0;
            margin: 0;
            justify-content: center;
            align-items: center;

            & li {
                padding: 0 20px;
                margin: 0 5px;
                font-size: 1em;
                font-weight: 700;

                &:hover {
                    color: gray;
                }
            }
        }
    }

</style>