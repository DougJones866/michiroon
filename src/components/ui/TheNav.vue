<template>
    <div>
      <div class="container">
        <nav>
          <ul>
            <li>
              <div class="logo">
                <p>Michiroon</p>
              </div>
            </li>
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
      </div>
      <!-- <div class="border"></div> -->
    </div>
</template>



<script>
export default {
    
}
</script>


<style scoped>
.container {
    margin-bottom:10px;
    display:inline-flex;
}
nav {
    align-items: center;
    
    margin: 20px;
    
}
.logo {
    
    border-style: solid;
    margin: 15px;
    padding: 10px;
    border-width: thin;
}
nav ul {
    list-style: none;
    padding:0;
}
li {
    padding: 5px;
    display: inline;
}
a {
    color: black;
}
a:link {
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
    color: #db6f02;
}


</style>