<template>
  <div id="app">



    <router-view/>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/tabbar"
export default {
  name: 'App',
  components : {
    Tabbar
  },
  beforeCreate () {
    this.$router.push('/home')
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }
  body,div {
    font-size: 16px;
  }
  #app {
    background: #fcfcfc;
    padding-bottom: 1.6rem;
  }
  h1,h2,h3,h4,h5,h6,strong,b {
    font-weight: normal;
  }

</style>
