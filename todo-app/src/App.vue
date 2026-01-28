<script lang="ts" setup>
import {FwbNavbar} from "flowbite-vue";
</script>

<template>
  <FwbNavbar class="bg-dark-soft">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/create">Create</RouterLink>
  </FwbNavbar>

  <div class="w-screen flex flex-col">
    <RouterView/>
  </div>

</template>

<style>
</style>
