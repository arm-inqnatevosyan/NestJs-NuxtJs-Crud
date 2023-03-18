<template>
  <div>
    <NavBars />
    <div>
      <h1 class="mt-7 text-3xl font-bold text-sky-600 text-center">
        Users
      </h1>
      <div class="mt-7 w-full sm:grid-cols-1 md:grid-cols-3 lg:grid grid-cols-3">
        <div v-for="user in users" :key="user.id" class="w-80 h-52 bg-sky-700 shadow-lg shadow-cyan-500/50  mx-auto mt-2">
          <div class="flex flex-col h-full items-center justify-center text-white font-bold">
            <h1>{{ user.fullname }}</h1>
            <h1>{{ user.lastname }}</h1>
            <h1>{{ user.password }}</h1>
            <h1 v-if="user">
              ID : {{ user.id }}
            </h1>
            <button v-if="!showProfileButton" class="text-black font-bold" @click="openUserProfile(user.id)">
              See your Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import NavBars from '@/components/NavBars'

export default {
  components: { NavBars },
  data () {
    return {
      users: []
    }
  },
  async mounted () {
    const response = await axios.get('http://localhost:3005/users')
    this.users = response.data
  },
  methods: {
    async openUserProfile (user) {
      await this.$router.push('/users' + '/' + `${user}`)
      if (user) {
        user = !user
      }
    }
  }
}
</script>
