<template>
  <div class="card">
    <div class="card-header">
      {{ fullName }}
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-if="user.firstName"><strong>Имя:</strong> {{ user.firstName }}</li>
        <li class="list-group-item" v-if="user.middleName"><strong>Отчество:</strong> {{ user.middleName }}</li>
        <li class="list-group-item" v-if="user.lastName"><strong>Фамилия:</strong> {{ user.lastName }}</li>
        <li class="list-group-item" v-if="user.sex"><strong>Пол:</strong> {{ user.sex }}</li>
        <li class="list-group-item" v-if="user.birthDate"><strong>Дата рождения:</strong> {{ user.birthDate }}</li>
        <li class="list-group-item" v-if="user.email"><strong>Email:</strong> {{ user.email }}</li>
        <li class="list-group-item" v-if="user.phone"><strong>Телефон:</strong> {{ user.phone }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default  {
  name: 'UserCard',
  props: {
    user: Object
  },
  setup(props) {
    const fullName = computed({
      get: () => {
        let full = ''
        if(props.user.firstName) {
          full = full + props.user.firstName + ' '
        }
        if(props.user.middleName) {
          full = full + props.user.middleName + ' '
        }
        if(props.user.lastName) {
          full = full + props.user.lastName
        }

        return full
      },
      set: (newVal) => {
        let full = ''
        if(newVal.firstName) {
          full = full + newVal.firstName + ' '
        }
        if(newVal.middleName) {
          full = full + newVal.middleName + ' '
        }
        if(newVal.lastName) {
          full = full + newVal.lastName
        }

        return full
      },
    })

    return {fullName}
  }
}
</script>
