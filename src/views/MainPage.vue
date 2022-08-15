<template>
  <base-card-2 class="card2">
  <div class="mainCard">
    <h1>Hello I'm Michiroon!</h1>
    <h2>I'm a professional illustrator</h2>
    </div>
  <div class="image">
          <img class="mainImage" src="../assets/michi.png" alt="Michi" />
        </div>
  </base-card-2>
  <base-card>
    
    <blog-entry v-for="entry in entries" :key="entry.id" :id="entry.id" :title="entry.title" :date="entry.date" :description="entry.description" />
      <div class="image2">
      <img class="newImage" src="../assets/images/panel.jpg"/>
      </div>
  </base-card>
  <!-- <div class="imgCard">
  <examples />

  </div>
   -->
</template>

<script>
export default {
  data() {
    return {
      entries: [
        {
          id: "test",
          title: "This is a test entry",
          date: "Aug 4th 2022",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis. Ornare lectus sit amet est.",
        },
      ],
    }
  }
};
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

.info {
  display: inline;
}

.image {
  border-style:solid;
  border-color: #8e4200;
  background-color: rgba(220, 196, 164, 0.6 );
  margin: 15px;
  margin-left: 50px;

}

.image2{
  border-style:solid;
  border-color: #8e4200;
}
.newImage {
 
  
  max-width: 100%;
  height: auto;
  display: inline;
}

.mainImage {
  max-width: 250px;
  height: auto;
}
</style>
