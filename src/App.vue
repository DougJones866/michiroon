<template>

  <the-nav></the-nav>
  
  

  <router-view />
  
  <the-footer></the-footer>
</template>

<script>

export default {
  
};
</script>

<style>

* {
    box-sizing: border-box;
    font-family: "ccurbanbarbariangiantregular", "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif;
}
body {
  margin: 0px;
  /* background-image: url('assets/Honeycomb.png'); */
  
  background-color: #FFFDDE;
  
}
#app {
  font-family: "Courier New", Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
  /* margin-top: 60px; */
}



h1 {
  color: #db6f02;
}


</style>
