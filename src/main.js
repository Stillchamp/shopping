import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'


import button from "primevue/button"
import card from "primevue/card"
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           
import  'primeflex/primeflex.css' 
import InputText from "primevue/inputtext"                        
import Button from 'primevue/button'
import Card from 'primevue/card'




const app = createApp(App);
app.use(router);
app.use(PrimeVue, {ripple: true});

app.component("Button", Button)
app.component("Card", Card);
app.component("InputText", InputText)

app.mount('#app')

