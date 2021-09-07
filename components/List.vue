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
import Vue from 'vue'
import ItemCard from '@/components/ItemCard.vue'

export default Vue.extend({
  components: {
    ItemCard
  },
  props: {
    items: {
      required: true,
      type: Array
    }
  },
  data: () => ({
    newItemName: ''
  }),
  methods: {
    addItem () {
      if (this.newItemName.length !== 0) {
        this.$emit('add-item', this.newItemName)
        this.newItemName = ''
      }
    },
    changeDone (id: number) {
      this.$emit('change-done', id)
    },
    deleteItem (id: number) {
      this.$emit('delete-item', id)
    },
    deleteDone () {
      this.$emit('delete-done')
    }
  }
})
</script>
