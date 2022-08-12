<template>
  <base-card-2 class="card2">
  <div class="mainCard">
    <h1>Hello I'm Michiroon!</h1>
    <h2>I'm a professional illustrator</h2>
    </div>
  <div class="image">
          <img src="../assets/michi.png" alt="Michi" />
        </div>
  </base-card-2>
  <base-card>
    <div class="entry">
      <h1>Title</h1>
      <h4>Aug 4 2022</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus
        elementum sagittis. Ornare lectus sit amet est.
      </p>
    </div>
  </base-card>
  <!-- <div class="imgCard">
  <examples />

  </div>
   -->
</template>

<script>
export default {};
</script>


<style scoped>


.mainCard{
  display: inline;
}

.imgCard {
  margin-bottom: 50px;
}

.entry {
  max-width: 500px;
  margin: 15px;
  padding: 15px;
}

.image {
  border-style:solid;
  border-color: #8e4200;
  background-color: rgba(220, 196, 164, 0.6 );
  margin: 15px;
  margin-left: 50px;
  
  
  

}

img {
  max-width: 250px;
  height: auto;
}
</style>
