<script setup lang="ts">
import {ref} from 'vue'
import {useTaskStore} from "@/stores/task.ts";
import {FwbButton, FwbCheckbox, FwbInput, FwbTextarea, FwbAlert, FwbHeading} from "flowbite-vue";

const taskStore = useTaskStore()
const name = ref("")
const detail = ref("")
const isDone = ref(false)
</script>

<template>
  <div class="w-4/5 m-auto">
    <h1>Task</h1>
    <h2>Store: {{ taskStore.name }}</h2>
    <h2>State: {{ name }}</h2>

    <form class="">
      <fwb-input id="taskName" type="text" label="Task name" placeholder="Enter task name"
                 v-model="name" required class=""/>
      <fwb-textarea id="taskDetail" label="Description" placeholder="Description..."
                    v-model="detail" required/>
      <fwb-checkbox id="isDone" label="Is done?" v-model="isDone"/>
      <fwb-button color="blue" size="md" class="p-2">Save</fwb-button>
    </form>

  </div>
</template>

<style scoped>
</style>
