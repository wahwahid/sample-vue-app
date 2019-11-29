<template>
  <div>
    <button class="muted-button" @click="goBack">Go Back</button>
    <i v-if="message !== ''">{{ message }}</i>
    <contact-form @add:contact="addContact" />
  </div>
</template>
<script>
import ContactForm from "@/components/contact/ContactForm.vue"
import { Contact } from "../services/contact"

export default {
  name: "page-contact-form",
  components: {
    ContactForm
  },
  data() {
    return {
      message: ''
    };
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    showMessage(message) {
      this.message = message
      setTimeout(() => {
        this.message = ''
      }, 3000)
    },
    async addContact(contact) {
      try {
        if (!contact.name || contact.name === '' || !contact.email || contact.email === '') {
          this.showMessage('Add Contact Failed !')
          return
        }
        contact.phone = ''
        contact.address = ''
        let res = await Contact.create(contact)
        if (res.data === true) {
          this.$router.push('/')
        } else {
          this.showMessage('Add Contact Failed !')
        }
      } catch (error) {
        this.showMessage('Add Contact Failed !')
      }
    }
  }
};
</script>

<style></style>