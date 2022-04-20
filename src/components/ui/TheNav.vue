<template>
  <header>
    <div class="logo">
      <router-link to="/"><img src="./michi.png" alt="Michi" /></router-link>
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/portfolio">Portfolio</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>

    
  </header>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans:wght@500&display=swap');

*{
  box-sizing:border-box;
}

header {
  font-family: "open sans", Times, serif;
  width: 100%;
  height: 10rem;
  /* background-color: #3d008d; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom:none 1px;
  background-color: #e0900e;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  
  
}
header a {
  text-decoration: none;
  color:#8e4200;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

.logo{
  float:left;
  padding: 50px;
  
  
  
  
}
img {
  height: 150px;
  width: auto;
  
  
  
  
  
}
a:active,
a:hover {
  
}
/* a.router-link-active {
  border: 1px solid #ffb825;
} */
header nav{
    display: flex;
}

header ul {
    list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
  
}
</style>
