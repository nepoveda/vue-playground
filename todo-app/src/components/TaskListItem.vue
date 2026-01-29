<script lang="ts" setup>

import {FwbButton, FwbCheckbox, FwbHeading} from "flowbite-vue";
import {type TaskInfo, useTaskStore} from "@/stores/task.ts";

const taskStore = useTaskStore()
const props = defineProps<{ task: TaskInfo }>()
</script>

<template>
  <fwb-heading class="text-2xl font-bold underline underline-offset-4" tag="h3">
    {{ props.task.name }}
  </fwb-heading>
  <p>{{ props.task.detail }}</p>
  <fwb-checkbox v-model="props.task.isDone" class="lg:w-5 lg:h-5"
                label="Done"/>
  <fwb-button color="red" @click="taskStore.remove(props.task.id)">
    <svg aria-hidden="true" class="w-6 h-6 text-gray-800 dark:text-white"
         fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
        stroke-width="2"/>
    </svg>
  </fwb-button>
</template>

<style scoped>
p {
  white-space: pre-line;
}

</style>
