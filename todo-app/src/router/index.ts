import {createRouter, createWebHistory} from 'vue-router'
import TaskList from "@/components/TaskList.vue";
import Task from "@/components/Task.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: TaskList},
    {path: '/create', component: Task}
  ],
})

export default router
