<template>
  <base-card-2 class="card2">
    <div class="mainCard">
      <h1>Hello I'm Michiroon!</h1>
      <h2>I'm a professional illustrator</h2>
    </div>
    <div class="image">
      <img class="mainImage" src="../assets/images/panel.jpg" alt="Michi" />
    </div>
  </base-card-2>
  <base-card>
    <blog-entry
      v-for="entry in entries"
      :key="entry.id"
      :id="entry.id"
      :title="entry.title"
      :date="entry.date"
      :description="entry.description"
    />
    <div class="image2">
      <img class="newImage" src="../assets/michi.png" />
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
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis. Ornare lectus sit amet est.",
        },
      ],
    };
  },
};
</script>


<style scoped>
.mainCard {
  margin: 15px;
}



.entry {
  max-width: 700px;
  margin: 15px;
  padding: 15px;
}

.info {
  display: inline;
  
}



.image2 {
  border-style: solid;
  border-color: #8e4200;
  margin: 50px;
  border-style: solid;
  border-color: #8e4200;
  border-width: 10px;
}
.newImage {
  max-width: 250px;
  height: auto;
  display: inline;
  
}

.image {
  width: 600px;
}

.mainImage {
  max-width: 100%;
  height: auto;
  border-style: solid;
  border-color: #8e4200;
  border-width: 10px;
  
  
  
}
</style>
