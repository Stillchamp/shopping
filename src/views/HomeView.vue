<template>
  <div class="home">
    <addpetVue @add-pet="addPet" />
    <pets
      @remove-pet="removePet"
      @add-favorite="addFavorite"
      v-bind:pets="pets"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import pets from "../components/pets.vue";
import addpetVue from "@/components/addpet.vue";
export default {
  name: "HomeView",
  components: {
    pets,
    addpetVue,
  },
  methods: {
    // addPet(pet) {
    //   this.pets = [...this.pets, pet];
    // },
    async addPet(pet) {
      const response = await fetch(
        "https://62e5259a20afdf238d7807dd.mockapi.io/pets",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(pet),
        }
      );
      const data = await response.json();
      this.pets = [...this.pets, data];
    },

    async removePet(id) {
      if (confirm("are you sure you want to delete this pet?")) {
        const response = await fetch(
          `https://62e5259a20afdf238d7807dd.mockapi.io/pets/${id}`,
          {
            method: "DELETE",
          }
        );
        response.status === 200
          ? (this.pets = this.pets.filter((pet) => pet.id !== id))
          : alert("delete failed");
      }
    },

    // removePet(id) {
    //   console.log("home", id);
    //   if (confirm("are you sure you want to delete this pet?")) {
    //     this.pets = this.pets.filter((pet) => pet.id !== id);
    //   }
    // },
    // addFavorite(id) {
    //   console.log("home favorite", id);
    //   this.pets = this.pets.map((pet) =>
    //     pet.id === id ? { ...pet, isFavorite: !pet.isFavorite } : pet
    //   );
    // },

    async addFavorite(id) {
      const addFavorite = await this.fetchPet(id);
      const updatedFavorite = {
        ...addFavorite,
        isFavorite: !addFavorite.isFavorite,
      };

      const response = await fetch(
        `https://62e5259a20afdf238d7807dd.mockapi.io/pets/${id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedFavorite),
        }
      );
      console.log("home favorite", id);
      this.pets = this.pets.map((pet) =>
        pet.id === id ? { ...pet, isFavorite: !pet.isFavorite } : pet
      );
      const data = await response.json();

      this.pets = this.pets.map((pet) =>
        pet.id === id ? { ...pet, isFavorite: data.isFavorite } : pet
      );
    },
    async fetchPets() {
      const response = fetch(
        "https://62e5259a20afdf238d7807dd.mockapi.io/pets"
      );
      const data = await response.json();
      return data;
    },
    async fetchPet(id) {
      const response = await fetch(
        `https://62e5259a20afdf238d7807dd.mockapi.io/pets/${id}`
      );
      const data = await response.json();
      return data;
    },
  },
  data() {
    return {
      pets: [],
    };
  },
  async created() {
    this.pets = await this.fetchPets();
    //     this.pets = [
    //       {
    //         id: 1,
    //         name: "silly",
    //         age: 3,
    //         isFavorite: true,
    //         url: "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=400",
    // },
    //       {
    //         id: 2,
    //         name: "rico",
    //         age: 2,
    //         url: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=400",
    //         isFavorite: false,
    //       },
    //     ];
  },
};
</script>
