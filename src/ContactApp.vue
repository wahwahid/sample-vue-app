<template>
  <div id="app" class="small-container">
    <h1>Contacts</h1>
    <i v-if="message !== ''">{{ message }}</i>
    <contact-form @add:contact="addContact" />
    <h5 v-if="loadingData">Loading Data...</h5>
    <contact-list v-else :contacts="contacts" @delete:contact="deleteContact" @update:contact="updateContact"  />
  </div>
</template>
<script>
import ContactList from "@/components/ContactList.vue";
import ContactForm from "@/components/ContactForm.vue";
import { Contact } from "./services/contact"

export default {
  name: "contact-app",
  components: {
    ContactList,
    ContactForm
  },
  data() {
    return {
      contacts: [],
      loadingData: true,
      message: ''
    };
  },
  mounted() {
    this.loadContact()
  },
  methods: {
    showMessage(message) {
      this.message = message
      setTimeout(() => {
        this.message = ''
      }, 3000)
    },
    async loadContact() {
      this.loadingData = true
      let res = await Contact.list()
      this.contacts = res.data
      this.loadingData = false
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
          this.showMessage('Add Contact Success !')
          this.loadContact()
        } else {
          this.showMessage('Add Contact Failed !')
        }
      } catch (error) {
        this.showMessage('Add Contact Failed !')
      }
    },
    async deleteContact(id) {
      try {
        let res = await Contact.delete(id)
        if (res.data === true) {
          alert('Delete Contact Success !')
          this.loadContact()
        } else {
          alert('Delete Contact Failed !')
        }
      } catch (error) {
        alert('Delete Contact Failed !')
      }
    },
    updateContact(id, updatedContact) {
      this.contacts = this.contacts.map(contact =>
        contact.id === id ? updatedContact : contact
      )
    }
  }
};
</script>

<style>
.small-container {
  max-width: 680px;
}
</style>