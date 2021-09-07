<template>
  <v-card class="my-1">
    <v-card-title class="py-0 d-flex justify-space-between">
      <v-checkbox
        v-model="item.done"
        :label="item.name"
        @change="changeDone"
      />
      <v-btn icon color="error" @click="deleteItem">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  methods: {
    changeDone () {
      this.$emit('change-done', this.item.id)
    },
    deleteItem () {
      this.$emit('delete-item', this.item.id)
    }
  }
})
</script>
