<template>
  <div class="user-list">
    <div v-for="user in users" :key="user.id">
      <SingleUser :user="user" />
    </div>
  </div>
</template>

<script>
import SingleUser from "./SingleUser.vue"
export default {
  props: ['users'],
  components: { SingleUser },
  setup(props) {
    console.log(props.users);
  }
}
</script>

<style scoped>
.user-list {
  width: 60vw;
}
</style>