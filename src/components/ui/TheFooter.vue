<template>
  <div class="footer">
    <div class="links">
      <ul>
        <li><a href="https://twitter.com/Michiroon"><fa :icon="['fab', 'twitter']" /></a></li>
        <li><a href="https://www.instagram.com/michiroon/"><fa :icon="['fab', 'instagram']" /></a></li>
        <li><a href="https://michiroon.gumroad.com/"><fa icon="g" /></a></li>
    <div class="copyright">
      <h3>© 2021 by Michiroon</h3>
    </div>
      </ul>
      
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans:wght@500&display=swap");

.footer {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  border-top: none 1px;
  background-color: #e0900e;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  padding:10px;
  margin-top:50px;
  
}
a {
  text-decoration: none;
  color: #8e4200;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fa {
size:10px;
}


a:active,
a:hover,
a.router-link-active {
  border: 1px solid #ffb825;
}

.copyright {
  color:black;
  
}
</style>
