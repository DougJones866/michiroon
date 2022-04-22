import { createApp } from 'vue'
import router from './router.js'
import App from './App.vue'
import TheNav from './components/ui/TheNav.vue'
import TheFooter from './components/ui/TheFooter.vue'
import BaseCard from './components/ui/BaseCard.vue'
import ContactForm from './components/ContactForm.vue'

const app = createApp(App)
app.use(router);


app.component('the-nav', TheNav);
app.component('the-footer', TheFooter);
app.component('base-card', BaseCard);
app.component('contact-form', ContactForm);

app.mount('#app');