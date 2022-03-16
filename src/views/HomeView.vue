<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="users.length">
    <UserList :users="users" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import UserList from "../components/UserList.vue"
// import { ref } from '@vue/reactivity'
import getUsers from "../composables/getUsers"

export default {
  name: 'HomeView',
  components: { UserList },
  setup() {

    const { users, error, load} = getUsers()

    load()

    // const users = ref([]);
    // const error = ref(null);

    // const load = async () => {
    //   try {
    //     let data = await fetch("https://jsonplaceholder.typicode.com/users")
    //     if (!data.ok) {
    //       throw Error("sorry, no data available at the moment")
    //     }
    //     users.value = await data.json()
    //     console.log(data);
    //   }
    //   catch (err) {
    //     error.value = err.message
    //     // console.log(error.value);
    //   }
    // }
    // load()

    return { users, error }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>