<script lang="ts" setup>

import {FwbCheckbox, FwbHeading} from "flowbite-vue";
import type {TaskInfo} from "@/stores/task.ts";

const props = defineProps<{ task: TaskInfo }>()
</script>

<template>
  <fwb-heading class="text-2xl font-bold underline underline-offset-4" tag="h3">
    {{ props.task.name }}
  </fwb-heading>
  <p>{{ props.task.detail }}</p>
  <fwb-checkbox v-model="props.task.isDone" class="lg:w-5 lg:h-5"
                label="props.task.isDone"/>
</template>

<style scoped>
p {
  white-space: pre-line;
}

</style>
