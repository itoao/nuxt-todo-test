<template>
  <div>
    <v-card class="mx-auto px-3 py-2" width="95%" max-width="500px">
      <v-card-title class="d-flex justify-space-between">
        <p class="ma-0">
          Things to do...
        </p>
        <v-btn
          small
          outlined
          color="error"
          class="pl-2"
          @click="deleteDone"
        >
          <v-icon>mdi-delete-outline</v-icon>
          Done
        </v-btn>
      </v-card-title>
      <v-form @submit.prevent="addItem">
        <v-text-fi
          v-model="newItemName"
          placeholder="Add items..."
        />
      </v-form>
      <div v-for="item in items" :key="item.id">
        <ItemCard
          :item="item"
          @delete-item="deleteItem"
          @change-done="changeDone"
        />
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@vue/composition-api'
import ItemCard from '@/components/ItemCard.vue'

export default defineComponent({
  components: {
    ItemCard
  },
  props: {
    items: {
      required: true,
      type: Array
    }
  },
  setup (context: SetupContext) {
    const newItemName = ref('')
    const addItem = () => {
      if (newItemName.value.length !== 0) {
        context.emit('add-item', newItemName.value)
        newItemName.value = ''
      }
    }
    const changeDone = (id: number) => {
      context.emit('change-done', id)
    }
    const deleteItem = (id: number) => {
      context.emit('delete-item', id)
    }
    const deleteDone = () => {
      context.emit('delete-done')
    }
    return {
      addItem,
      changeDone,
      deleteItem,
      deleteDone
    }
  }
})
</script>
