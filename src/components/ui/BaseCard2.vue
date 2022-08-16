<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  /* border-radius: 12px; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  /* max-width: 40rem; */
  background-color: #e0900e;
  border-bottom-style: solid;
  border-top-style: solid;
  border-width: 15px;
  border-color: #8e4200;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}
</style>