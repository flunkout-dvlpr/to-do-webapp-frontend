<template>
  <li>
    <div>{{ task.name }}</div>
    <small>{{ task.dueDate }} @ {{ task.dueTime}}</small>
    <button @click='deleteTask(index)'>x</button>
  </li>
</template>

<script>
export default {
  props: ['task', 'index']
}
</script>
