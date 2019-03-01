<template>
    <div class="head">
        <div class="head_top">
            <div class="logo">
                <h1><img src="../../static/images/20190227/icon-logo.png" alt=""></h1>
            </div>
            <div class="login">
                <img src="../../static/images/20190227/icon-login.png" alt="">
            </div>
        </div>
        <div class="head_form">
            <form class="form_con">
                <input type="submit" class="submit">
                <input type="text" placeholder="请输入您要搜索的商品" class="keyword" >
            </form>
        </div>
    </div>
</template>

<style>
.head {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    padding: 0.16rem 0.3rem;
    
}
.head .head_top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.head .logo h1 {
    font-size: 0;
}
.head .logo h1 img {
    width: 2rem;
}
.head .login {
    font-size: 0;
}
.head .login img {
    max-width: 0.5rem;
}
.head .head_form {
    margin: 0.2rem 0;
}
.head .head_form .form_con {
    width: 100%;
    height: 0.7rem;
    background: #e6e7eb;
    border-radius: 0.1rem;
    padding: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

input.submit {
    width: 0.5rem;
    height: 100%;
    background: url(../../static/images/20190227/icon-02.png) center transparent;
    background-size: auto 100%;
    border: 0;
    font-size: 0;
    margin: 0 0.2rem;
}

input.keyword {
    width: calc( 100% - 1rem );
    height: 100%;
    line-height: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0.24rem;
    color: rgba(0, 0, 0, 0.4);
}
input.keyword::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:rgba(0, 0, 0, 0.4);
}
input.keyword:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:rgba(0, 0, 0, 0.4);
}
input.keyword::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:rgba(0, 0, 0, 0.4);
}
input.keyword:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:rgba(0, 0, 0, 0.4);
}
</style>