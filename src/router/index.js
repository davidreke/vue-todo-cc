import { createRouter, createWebHashHistory } from 'vue-router'
import ViewTodos from '../views/ViewTodos'
import AddTodo from '../views/AddTodo'

const routes = [
  {
    path: '/',
    name: 'ViewTodos',
    component: ViewTodos
  },
  {
    path: '/AddTodo',
    name: 'AddTodo',
    component: AddTodo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
