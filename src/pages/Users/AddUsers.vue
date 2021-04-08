<template>
  <div>
    <h1 class="mt-3 mb-5">Добавление пользователя</h1>
    <UserAddForm />
  </div>
</template>

<script>
import UserAddForm from "@/modules/Users/UserAddForm";
export default {
  name: 'AddUser',
  components: {UserAddForm},
}
</script>
