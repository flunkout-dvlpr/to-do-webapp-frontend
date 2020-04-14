<template>
  <q-page padding>
    <ul>
      <task v-for="(task, index) in tasks"
      :key="task.id"
      :task="task"
      :index="index"
      :deleteTask="deleteTask"
      ></task>
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
          name: 'learn vuejs',
          dueDate: '2020/04/18',
          dueTime: '21:00'

        },
        {
          id: 2,
          name: 'learn quasar',
          dueDate: '2020/04/19',
          dueTime: '21:00'

        },
        {
          id: 3,
          name: 'learn js',
          dueDate: '2020/04/20',
          dueTime: '21:00'

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
