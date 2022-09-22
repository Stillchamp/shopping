<template>
  <div style="margin-top: 20px">
    <form @submit="onSubmit" class="formgroup-inline">
      <div class="field">
        <label for="name" class="p-sr-only">Name</label>
        <input
          v-model="name"
          id="name"
          type="text"
          class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"
          placeholder="Name"
        />
      </div>
      <div class="field">
        <label for="Age" class="p-sr-only">Age</label>
        <input
          v-model="age"
          id="Age"
          type="number"
          class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"
          placeholder="Age"
        />
      </div>
      <div class="field">
        <label for="Url" class="p-sr-only">Url</label>
        <input
          v-model="url"
          id="Url"
          type="text"
          class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"
          placeholder="Url"
        />
      </div>
      <button
        type="submit"
        class="text-white bg-primary-500 border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "addpet",
  data() {
    return {
      name: " ",
      age: " ",
      url: " ",
    //   isFavorite: false,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      const newPet = {
        id: Math.random(),
        name: this.name,
        age: this.age,
        url: this.url,
        isFavorite: false,
      };
      console.log("new pet", newPet);

      this.$emit("add-pet", newPet)

      this.name = "";
      this.age = "";
      this.url = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
