<template>
  <div>
    <NavBars />
    <div>
      <h1 class="mt-7 text-3xl font-bold text-sky-600 text-center">
        My Jobs
      </h1>
      <div class="mt-7 w-full sm:grid-cols-1 md:grid-cols-3 lg:grid grid-cols-3">
        <div v-for="user in users" :key="user.id" class="w-80 h-52 bg-sky-700 shadow-lg shadow-cyan-500/50  mx-auto mt-2">
          <div class="flex flex-col h-full items-center justify-center text-white font-bold">
            <h1>{{ user.fullname }}</h1>
            <h1>{{ user.lastname }}</h1>
            <h1>{{ user.password }}</h1>
            <button class="text-black font-bold" @click="deleteData(user.id)">
              Delete
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
    async deleteData (id) {
      try {
        // make a delete request to the server with the id parameter
        const response = await this.$axios.delete(`http://localhost:3005/users/${id}`)
        this.users.shift(response)
        if (response.message !== '') {
          this.$router.push('/')
        }
        // handle success response
      } catch (error) {
        // handle error response
      }
    }
  }
}
</script>
