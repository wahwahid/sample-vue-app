<template>
  <div id="app" class="small-container">
    <h1>Contacts</h1>
    <contact-list :contacts="contacts" />
  </div>
</template>
<script>
import ContactList from '@/components/ContactList.vue'

export default {
  name: 'contact-app',
  components: {
    ContactList,
  },
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: 'Jon Snow',
          email: 'jon@snow.north',
        },
        {
          id: 2,
          name: 'Arya Stark',
          email: 'arya@stark.north',
        },
        {
          id: 3,
          name: 'Daenerys Targaryen',
          email: 'danny@targaryen.dragon',
        },
      ],
    }
  },
}
</script>

<style>
  .small-container {
    max-width: 680px;
  }
</style>