<template>
  <div class="user">
    <router-link :to="{ name:'details', params: {id: user.id} }">
      <h3 class="name">{{user.name}}</h3>
    </router-link>
    Username: 
    <span v-for="username in user.username" :key="username">
      {{ username }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style scoped>
.user {
  padding: .5rem;
  border-bottom: 1px solid grey;
  border-radius: 1rem;
}
.name {
  margin: 0;
}
</style>