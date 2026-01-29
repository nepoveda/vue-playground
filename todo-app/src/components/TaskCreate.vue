<script lang="ts" setup>
import {ref} from 'vue'
import {useTaskStore} from "@/stores/task.ts";
import {FwbButton, FwbCheckbox, FwbHeading, FwbInput, FwbTextarea} from "flowbite-vue";
import {faker} from "@faker-js/faker/locale/cs_CZ";

const taskStore = useTaskStore()
const name = ref("")
const detail = ref("")
const isDone = ref(false)
const count = ref(10)

function saveTask() {
  taskStore.add({
    name: name.value,
    detail: detail.value,
    isDone: isDone.value
  })
  name.value = ""
  detail.value = ""
  isDone.value = false
}

function bulkCreate() {
  for (let i = 0; i < count.value; i++) {
    taskStore.add({
      name: faker.company.catchPhrase(),
      detail: faker.lorem.paragraphs({min: 1, max: 3}),
      isDone: faker.datatype.boolean()
    })
  }
}
</script>

<template>
  <div class="w-4/5 m-auto">
    <fwb-heading tag="h2">Task</fwb-heading>
    <h2>Store: {{ taskStore.tasks }}</h2>
    <h2>State: {{ name }}</h2>

    <form class="" @submit.prevent="saveTask">
      <fwb-input id="taskName" v-model="name" class="" label="Task name"
                 placeholder="Enter task name" required type="text"/>
      <fwb-textarea id="taskDetail" v-model="detail" label="Description"
                    placeholder="Description..."/>
      <fwb-checkbox id="isDone" v-model="isDone" label="Is done?"/>
      <fwb-button class="p-2" color="green" size="md">Save</fwb-button>
    </form>

  </div>
  <div class="w-4/5 m-auto">
    <fwb-heading tag="h2">Bulk create</fwb-heading>
    <fwb-input v-model="count" label="To create" type="number"/>
    <fwb-button class="p-2 mt-2" @click="bulkCreate">Create {{ count }}</fwb-button>
  </div>
</template>

<style scoped>
</style>
