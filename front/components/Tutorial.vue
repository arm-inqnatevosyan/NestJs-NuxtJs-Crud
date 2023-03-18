<!-- Please remove this file from your project -->
<template>
  <div class="flex flex-col">
    <NavBars />
    <div class="flex flex-col w-1/3 mt-40 p-10 bg-sky-800 mx-auto h-my shadow-lg shadow-cyan-500/50">
      <h1 class="text-white font-bold font-sans mb-10 text-2xl">
        Add User
      </h1>
      <input
        id="input"
        v-model="firstname"
        class="border-solid border-2 border-sky-200 outline-none p-1"
        required
        type="text"
        placeholder="Fullname"
      >
      <input
        id="input"
        v-model="lastname"
        class="border-solid border-2 border-sky-200 outline-none p-1 mt-5"
        required
        type="text"
        placeholder="Lastname"
      >
      <input
        id="input"
        v-model="password"
        class="border-solid border-2 border-sky-200 outline-none p-1 mt-5"
        required
        type="password"
        placeholder="Password"
      >
      <button style="padding: 5px;margin-top: 20px;background-color: grey;color:white;" @click="submit">
        Add User
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import NavBars from '../components/NavBars.vue'
export default {
  name: 'NuxtTutorial',
  components: { NavBars },
  data () {
    return {
      firstname: '',
      lastname: '',
      password: ''
    }
  },
  methods: {
    async submit () {
      const post = await axios.post('http://localhost:3005/users', { fullname: this.firstname, lastname: this.lastname, password: this.password })
      if (post.message !== '') {
        this.$router.push('/users')
      }
    }
  }
}
</script>
