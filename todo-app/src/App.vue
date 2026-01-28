<script setup lang="ts">
import Task from "@/components/Task.vue";
import TaskList from "@/components/TaskList.vue";
</script>

<template>
  <div class="w-screen flex flex-col">
    <div>
      <Task></Task>
    </div>
    <div class="mt-5">
      <TaskList></TaskList>
    </div>
  </div>
</template>

<style>
</style>
