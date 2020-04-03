<template>
  <q-page padding>
  <ul>
    <task
    v-for='(task, index) in tasks'
    :key="task.id"
    :task='task'
    :index='index'
    :deleteTaks= 'deleteTask'
    >
    </task>

  </ul>
  </q-page>
</template>

<script>
import Task from 'components/Task.vue'
export default {
  data () {
    return {
      tasks: [
        {
          id: 1,
          name: 'Learn Vue.js',
          dueDate: '04-10-2020',
          dueTime: '12:00'
        },
        {
          id: 2,
          name: 'Learn Quasar Framework',
          dueDate: '04-12-2020',
          dueTime: '12:00'
        },
        {
          id: 3,
          name: 'Learn AWS Cognito',
          dueDate: '04-14-2020',
          dueTime: '12:00'
        }
      ]
    }
  },
  methods: {
    deleteTask (index) {
      this.tasks.splice(index, 1)
    }
  },
  components: {
    task: Task
  }
}
</script>

<style>
</style>
