<template>
  <Vue3Marquee>
    <img
      :src="img"
      v-for="img in imgArray"
      :key="img"
      class="image"
      
     
    />
  </Vue3Marquee>
 
</template>

<script>

export default {
 
  data() {
    return {
      imgArray: [

        
        require("./img1.jpg"),
        require("./michi.png"),

      ],
    };
  },
};
</script>

<style scoped>
.image {
  font-size: 30px;
  margin: 0 10px;
  max-width: 200px;
  height: auto;
}
</style>
