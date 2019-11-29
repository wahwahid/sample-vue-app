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
            <template v-if="edit === contact.id">
              <td><input type="text" v-model="contact.name" /></td>
              <td><input type="text" v-model="contact.email" /></td>
              <td>
                <button @click="handleUpdate(contact)">Save</button>
                <button class="muted-button" @click="edit = null">Cancel</button>
              </td>
            </template>
            <template v-else>
              <td>{{ contact.name }}</td>
              <td>{{ contact.email }}</td>
              <td>
                <button @click="handleEdit(contact.id)">Edit</button>
                <button @click="handleDelete(contact.id)">Delete</button>
              </td>
            </template>
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
  data() {
    return {
      edit: null
    }
  },
  methods: {
    handleDelete(id) {
      this.$emit('delete:contact', id)
    },
    handleEdit(id) {
      this.edit = id
    },
    handleUpdate(contact) {
      if (contact.name === '' || contact.email === '') {
        return
      }
      this.$emit('update:contact', contact.id, contact)
      this.edit = null
    }
  }
};
</script>

<style scoped>
  button {
    margin-right: 5px;
  }
</style>