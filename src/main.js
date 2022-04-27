import { createApp } from 'vue'
import router from './router.js'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter , faInstagram } from '@fortawesome/free-brands-svg-icons'
import TheNav from './components/ui/TheNav.vue'
import TheFooter from './components/ui/TheFooter.vue'
import BaseCard from './components/ui/BaseCard.vue'
import ContactForm from './components/ContactForm.vue'

const app = createApp(App)
app.use(router);
library.add(fas, faTwitter, faInstagram)


app.component('fa', FontAwesomeIcon)
app.component('the-nav', TheNav);
app.component('the-footer', TheFooter);
app.component('base-card', BaseCard);
app.component('contact-form', ContactForm);

app.mount('#app');