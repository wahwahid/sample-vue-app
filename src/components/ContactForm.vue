<template>
  <div id="contact-form">
    <form @submit.prevent="handleSubmit">
      <label>Contact name</label>
      <input v-model="contact.name" type="text" />
      <label>Contact Email</label>
      <input v-model="contact.email" type="text" />
      <button>Add Contact</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "contact-form",
  data() {
    return {
      contact: {
        name: "",
        email: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      const id = Date.now()
      this.$emit("add:contact", { id, ...this.contact })
      this.resetForm()
    },
    resetForm() {
      this.contact = {
        name: "",
        email: ""
      }
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 40px;
}
</style>