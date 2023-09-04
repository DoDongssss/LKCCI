import "./assets/main.css"
import "vue-silentbox/dist/style.css"
import "swiper/css"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import VueSilentbox from "vue-silentbox"

const app = createApp(App)

app.use(router)
app.use(VueSilentbox)

app.mount("#app")
