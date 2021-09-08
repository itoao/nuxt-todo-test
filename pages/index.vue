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
import { defineComponent, reactive, ref } from '@vue/composition-api'
import Item, { IItem } from '@/models/Item'
import List from '@/components/List.vue'

export default defineComponent({
  components: {
    List
  },
  setup () {
    const items = () => [
      reactive(new Item({
        id: 1,
        name: 'task1',
        done: false
      })),
      reactive(new Item({
        id: 2,
        name: 'task2',
        done: true
      })),
      reactive(new Item({
        id: 3,
        name: 'task3',
        done: false
      }))
    ]
    const newItemId = ref(4)

    const addItem = (itemName: string) => {
      items.push(
        new Item({
          id: newItemId.value++,
          name: itemName,
          done: false
        })
      )
    }
    const changeDone = (id: number) => {
    }
    const deleteItem = (id: number) => {
      items: IItem = items.filter((item) => item.id !== id)
    }
    const deleteDone = () => {
      items = items.filter((item) => !item.done)
    }
    return {
      items,
      addItem,
      changeDone,
      deleteItem,
      deleteDone
    }
  }
})
</script>
