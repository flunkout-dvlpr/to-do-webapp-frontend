<template>
  <q-page class="q-pa-md">
    <q-list
      separator
      bordered>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        clickable
        :class="!task.completed ? 'bg-amber-1' : 'bg-green-1' "
        @click="task.completed = ! task.completed"
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{ 'text-strikethrough' : task.completed } "
            >
              {{task.name}}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon
                size="16px"
                name="event"
                class="q-mr-xs"/>
            </div>
            <div class="column">
              <q-item-label
                caption
                class="row justify-end">
                {{task.dueDate}}
              </q-item-label>
              <q-item-label
                caption
                class="row justify-end">
                <small>{{task.dueTime}}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tasks: [
        {
          id: 1,
          name: 'Learn Vue.js',
          completed: false,
          dueDate: '2020/04/20',
          dueTime: '00:00'
        },
        {
          id: 2,
          name: 'Learn Quasar FrameWork',
          completed: true,
          dueDate: '2020/04/31',
          dueTime: '12:00'
        },
        {
          id: 3,
          name: 'Learn JavaScript',
          completed: false,
          dueDate: '2020/05/10',
          dueTime: '12:00'
        }
      ]
    }
  }

}
</script>

<style>
</style>
