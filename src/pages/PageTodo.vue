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
import { mapGetters } from 'vuex'
export default {
  computed: {
    // tasks () {
    //   return this.$store.getters['tasks/tasks']
    // }
    // Using mapGetter is a cleaner alternative than using/executing function
    ...mapGetters('tasks', ['tasks'])
  }
}
</script>

<style>
</style>
