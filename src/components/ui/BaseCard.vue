<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding-top: 100px;
  margin: -15px auto;
  max-width: 1400px;
  background-color: rgba(220, 196, 164 );
    z-index: -1;
  position:relative;
  display: inline-flex;
    flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  
  

  
 
}
</style>