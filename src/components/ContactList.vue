<template>
  <div id="contact-list">
    <table>
      <thead>
        <tr>
          <th>Contact name</th>
          <th>Contact email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact.id">
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "contact-list",
  props: {
    contacts: Array,
  }
};
</script>

<style scoped></style>