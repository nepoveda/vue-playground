<script setup lang="ts">
import {useTaskStore} from "@/stores/task.ts";
import {FwbHeading} from "flowbite-vue";

const tasksStore = useTaskStore()

</script>

<template>
  <div class="w-4/5 m-auto">
    <fwb-heading tag="h2">Task List</fwb-heading>
    <fwb-heading tag="h2" v-for="task in tasksStore.tasks">Store: {{ task.name }}</fwb-heading>
  </div>

</template>

<style scoped>

</style>
