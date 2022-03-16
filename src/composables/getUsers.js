import { ref } from "vue";

const getUsers = () => {
  const users = ref([]);
  const error = ref(null);
  
  const load = async () => {
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/users")
      if (!data.ok) {
        throw Error("sorry, no data available at the moment")
      }
      users.value = await data.json()
      console.log(data);
    }
    catch (err) {
      error.value = err.message
      // console.log(error.value);
    }
  }

  return { users, error, load }

}

export default getUsers