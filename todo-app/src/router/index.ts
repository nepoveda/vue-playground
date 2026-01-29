import {createRouter, createWebHistory} from 'vue-router'
import TaskList from "@/components/TaskList.vue";
import TaskCreate from "@/components/TaskCreate.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: TaskList},
    {path: '/create', component: TaskCreate}
  ],
})

export default router
