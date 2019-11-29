<template>
  <div id="app" class="small-container">
    <h1>Contacts</h1>
    <contact-form @add:contact="addContact" />
    <contact-list :contacts="contacts" @delete:contact="deleteContact" @update:contact="updateContact"  />
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
      contacts: []
    };
  },
  async mounted() {
    let res = await Contact.list()
    this.contacts = res.data
  },
  methods: {
    addContact(contact) {
      this.contacts = [...this.contacts, contact];
    },
    deleteContact(id) {
      this.contacts = this.contacts.filter(contact => contact.id !== id)
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