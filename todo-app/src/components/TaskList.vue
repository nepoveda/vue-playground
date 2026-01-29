<script lang="ts" setup>
import {useTaskStore} from "@/stores/task.ts";
import {FwbHeading} from "flowbite-vue";
import TaskListItem from "@/components/TaskListItem.vue";

const tasksStore = useTaskStore()

</script>

<template>
  <div class="w-4/5 m-auto">
    <fwb-heading class="mb-2 p-2 text-4xl font-bold" tag="h2">Active List</fwb-heading>
    <div v-for="task in tasksStore.active" :key="task.id" class="m-4 p-3 border-2 border-white">
      <TaskListItem :task="task"/>
    </div>
    <fwb-heading class="mb-2 p-2 text-4xl font-bold" tag="h2">Completed List</fwb-heading>
    <div v-for="task in tasksStore.completed" :key="task.id" class="m-4 p-3 border-2 border-white">
      <TaskListItem :task="task"/>
    </div>
  </div>

</template>

<style scoped>

</style>
