import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { auth } from '../firebase/config'

//auth guard
const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  console.log("current user in auth guard: ", user);
  if (!user) {
    next({ name: 'Welcome' })
  }
  next()

}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth  //catch enter event and do things
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
