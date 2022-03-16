import { ref } from "vue";

const getUser = (id) => {
  const user = ref(null);
  const error = ref(null);
  
  const load = async () => {
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
      if (!data.ok) {
        throw Error("this user does not exist")
      }
      user.value = await data.json()
      console.log(data);
    }
    catch (err) {
      error.value = err.message
      // console.log(error.value);
    }
  }

  return { user, error, load }
}

export default getUser