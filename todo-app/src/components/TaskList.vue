<script lang="ts" setup>
import {useTaskStore} from "@/stores/task.ts";
import {FwbCheckbox, FwbHeading} from "flowbite-vue";

const tasksStore = useTaskStore()

</script>

<template>
  <div class="w-4/5 m-auto">
    <fwb-heading class="mb-2 p-2" tag="h2">Task List</fwb-heading>
    <div v-for="task in tasksStore.tasks" class="m-4 p-3 border-2 border-white">
      <fwb-heading tag="h2">{{ task.name }}</fwb-heading>
      <p>{{ task.detail }}</p>
      <fwb-checkbox v-model="task.isDone" disabled/>

    </div>
  </div>

</template>

<style scoped>
h2 {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: underline;
}

p {
  white-space: pre-line;
}

</style>
