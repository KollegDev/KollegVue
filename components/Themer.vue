<template>
  <div>
    <select v-model="$colorMode.preference" class="w-24 h-8 border">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>
