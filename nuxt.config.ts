// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxt-alt/http'],
  app:{
    head:{
     link:[
      {
        rel:"stylesheet",
        href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
      },
      {
        rel:"movie",
        href:"https://www.jiomart.com/images/product/original/590003581/broccoli-each-approx-400-g-600-g-product-images-o590003581-p590113044-0-202203150433.jpg?im=Resize=(1000,1000)",
      }
     ]     
    }
  },
  http:{
    baseURL:"http://localhost:5000",
    credentials:"omit",
    browserBaseURL:"http://localhost:5000",
  }
})
