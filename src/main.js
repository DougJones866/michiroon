import { createApp } from 'vue'
import App from './App.vue'
import TheNav from './components/ui/TheNav.vue'
import TheFooter from './components/ui/TheFooter.vue'
import BaseCard from './components/ui/BaseCard.vue'
import router from './router'

const app = createApp(App)
app.use(router);


app.component('the-nav', TheNav);
app.component('the-footer', TheFooter);
app.component('base-card', BaseCard);

app.mount('#app');