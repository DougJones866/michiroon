<template>
  <div class="box">
    <slot></slot>
    <h1 class="title">{{ title }}</h1>
    <h4 class="subtitle">{{ subtitle }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style scoped>
.box {
  /* background-color: #e0900e; */
  background-color: white;
  width: 300px;
  height: 600px;
  margin: 20px;
  border-radius: 20px;
  border-bottom-style: solid;
  border-right-style: solid;
  /* border-color: #8e4200; */
  border-width: 5px;
  position: relative;
}
.title {
  color: white;
  text-shadow: -1px 0 #e8562d, 0 2px #e8562d, 2px 0 #e8562d, 0 -1px #e8562d;
  position: static;
  top: 0;
  
  
}
</style>