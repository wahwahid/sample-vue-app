<template>
  <div id="app" class="small-container">
    <h1>Contacts</h1>
    <contact-form @add:contact="addContact" />
    <contact-list :contacts="contacts" />
  </div>
</template>
<script>
import ContactList from "@/components/ContactList.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "contact-app",
  components: {
    ContactList,
    ContactForm
  },
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: "Jon Snow",
          email: "jon@snow.north"
        },
        {
          id: 2,
          name: "Arya Stark",
          email: "arya@stark.north"
        },
        {
          id: 3,
          name: "Daenerys Targaryen",
          email: "danny@targaryen.dragon"
        }
      ]
    };
  },
  methods: {
    addContact(contact) {
      this.contacts = [...this.contacts, contact];
    }
  }
};
</script>

<style>
.small-container {
  max-width: 680px;
}
</style>