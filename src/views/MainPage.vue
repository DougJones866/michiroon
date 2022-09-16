<template>
  <base-card-2 class="card2">
    <div class="mainCard">
      <h1>Hello I'm Michiroon!</h1>
      <h2>I'm a professional illustrator</h2>
    </div>
    <div class="image">
      <img class="mainImage" src="../assets/images/main.jpg" alt="Michi" />
    </div>
  </base-card-2>
  <base-card class="card1">
    <blog-entry
      v-for="entry in entries"
      :key="entry.id"
      :id="entry.id"
      :title="entry.title"
      :date="entry.date"
      :description="entry.description"
    />
    <div class="image2">
      <img class="newImage" src="../assets/images/panel.jpg" />
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
.card2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card1 {
    z-index: -1;
  position:relative;
  display: inline-flex;
    flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 100px;
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
  margin: 50px;
}
.newImage {
  border-style: solid;
  border-color: #8e4200;
  border-width: 5px;
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
@media only screen and (max-width: 500px) {
  .mainContainer {
    width: 100%;
    /* border-top:solid; */
    border-left: none;
  }
  .goat {
    border-right: none;
    border-bottom: solid;
  }
  .image2 {
    width: 100%;
    margin-bottom: 100px;
  }
  .profile2 img {
    border-style: none;
    border-top:solid;
    border-bottom: solid;
    width: 100%;
  }
}
</style>
