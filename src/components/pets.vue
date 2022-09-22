<template>
  <div class="grid">
    <div
      class="col-12 md:col-6 lg:col-3 sm:flex-nowrap"
      v-for="pet in pets"
      :key="pet.id"
    >
      <!-- <h3>{{ pet.name }}</h3> -->
      <pet
        @remove-pet="$emit('remove-pet', pet.id)"
        @add-favorite="$emit('add-favorite', pet.id)"
        :pet="pet"
      />
    </div>
  </div>
</template>
<script>
import pet from "./pet.vue";
export default {
  props: {
    pets: Array,
  },
  components: { pet },
  emits: ["remove-pet", "add-favorite"],
};
</script>
<style lang=""></style>
