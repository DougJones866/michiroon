<template>
  <div class="entry">
    <h2>{{ title }}</h2>
    <h4>{{ date }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.entry {
  max-width: 500px;
  margin: 15px;
  padding: 15px;
}

h2 {
  color: #db6f02;
}
</style>