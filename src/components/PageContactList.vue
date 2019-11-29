<template>
  <div>
    <router-link class="button muted-button" to="/add">Add Contact</router-link>
    <h5 v-if="loadingData">Loading Data...</h5>
    <contact-list v-else :contacts="contacts" @delete:contact="deleteContact" @update:contact="updateContact"  />
  </div>
</template>
<script>
import ContactList from "@/components/contact/ContactList.vue"
import { Contact } from "../services/contact"

export default {
  name: "page-contact-list",
  components: {
    ContactList
  },
  data() {
    return {
      contacts: [],
      loadingData: true
    };
  },
  mounted() {
    this.loadContact()
  },
  methods: {
    async loadContact() {
      this.loadingData = true
      let res = await Contact.list()
      this.contacts = res.data
      this.loadingData = false
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

<style></style>