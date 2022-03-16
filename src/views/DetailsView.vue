<template>
<div class="main-container">
        <Card style="width: 25em">
            <template #header>
                <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 15rem" />
            </template>
            <template v-if="user" #title>
                {{user.name}}
            </template>
            <template class="more-info" #subtitle>
                <p>Username: {{user.username}}</p>
                <p>Email: {{user.email}}</p>
                <p>Phone: {{user.phone}}</p>
                <p>Website: {{user.website}}</p>
            </template>
            <template #content>
                <p>Company name: {{user.company.name}}</p>
                <p>Responsible for: {{user.company.bs}}</p>
            </template>
            <template #footer>
                <Button icon="pi pi-check" label="Save" />
                <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
            </template>
        </Card>
    </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';
import getUser from "../composables/getUser"

export default defineComponent ({
  props: ['id'],
  setup(props) {
    const { user, error, load } = getUser(props.id)

    load()

    return { user, error }
  }
})
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.more-info {
    display: flex;
    flex-direction: column;
}

p {
    line-height: 1.5;
    margin: 0;
}
</style>