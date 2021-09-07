<template>
  <v-container class="pt-10">
    <List
      :items="items"
      @add-item="addItem"
      @change-done="changeDone"
      @delete-item="deleteItem"
      @delete-done="deleteDone"
    />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Item from '@/models/Item'
import List from '@/components/List.vue'

export default defineComponent({
  components: {
    List
  },
  setup () {

  },
  data: () => ({
    items: [
      new Item({
        id: 1,
        name: 'task1',
        done: false
      }),
      new Item({
        id: 2,
        name: 'task2',
        done: true
      }),
      new Item({
        id: 3,
        name: 'task3',
        done: false
      })
    ],
    newItemId: 4
  }),
  methods: {
    addItem (itemName: string) {
      this.items.push(
        new Item({
          id: this.newItemId++,
          name: itemName,
          done: false
        })
      )
    },
    changeDone (id: number) {
      // will access to database
    },
    deleteItem (id: number) {
      this.items = this.items.filter((item) => item.id !== id)
    },
    deleteDone () {
      this.items = this.items.filter((item) => !item.done)
    }
  }
})
</script>
