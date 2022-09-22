<template>
  <div class="pet">
    <!-- <h3>{{pet.name}}</h3> -->
    <!-- <Button label="save" /> -->
    <Card>
      <template #header>
        <img
         :src="pet.url" alt="pet"
        />
      </template>
      <template #title>
        {{ pet.name }}
      </template>
      <template #subtitle>
        {{ pet.age }}
      </template>
      <!-- <template #content>
                
            </template> -->
      <template #footer>
        <Button
        @click="onRemove(pet.id)"
          icon="pi pi-times"
          label="Remove"
          class="p-button-danger"
          style="margin-right: 4rem"
        />
        <Button
           @click="$emit('add-favorite', pet.id)"
          icon="pi pi-heart"
          :class="[
            pet.isFavorite ? '' : 'p-button-outlined',
            'p-button-rounded',
            'p-button-danger',
          ]"
        />
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  // props:["pet"],
  props: {
    pet: Object,
  },
  components: {},
  methods:{
    onRemove(id){
      console.log('clicked', id)
      this.$emit("remove-pet", id)
    }
  }
};
</script>

<style>
img{
  height: 250px;
  object-fit: cover;
}
</style>
