<template>
  <div class="container">
    <img-card :title="sketch">
      <div></div>
    </img-card>
    <img-card :title="cSketch">
      <div></div>
    </img-card>
    <img-card :title="fColor">
      <div></div>
    </img-card>
    <img-card :title="chibi">
      <div>
      </div>
    </img-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    sketch: "Sketch",
    cSketch: "Coloured Sketch",
    fColor: "Full Color",
    chibi: "Chibis",
  }),
};
</script>

<style scoped>

.container {
    display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
}
img {
  max-width: 200px;
  height: auto;
  object-fit: contain;
  margin-top: 55px;
}
</style>