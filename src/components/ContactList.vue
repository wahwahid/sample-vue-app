<template>
  <div id="contact-list">
    <table>
      <thead>
        <tr>
          <th>Contact name</th>
          <th>Contact email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="contacts.length > 0">
          <tr v-for="contact in contacts" :key="contact.id">
            <td>{{ contact.name }}</td>
            <td>{{ contact.email }}</td>
            <td>
              <button @click="handleDelete(contact.id)">Delete</button>
            </td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="3" class="text-center"> No contact saved </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "contact-list",
  props: {
    contacts: Array
  },
  methods: {
    handleDelete(id) {
      this.$emit('delete:contact', id)
    }
  }
};
</script>

<style scoped></style>