<template>
  <div id="app" class="small-container">
    <h1>Contacts</h1>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: "contact-app"
};
</script>

<style>
.small-container {
  max-width: 680px;
}
</style>