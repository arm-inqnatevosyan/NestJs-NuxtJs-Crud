<template>
  <div class="w-full grid sm:grid-cols-1 md:grid-cols-1 lg: grid-cols-4">
    <SeePost
      v-for="user in users"
      :id="user.id"
      :key="user.id"
      :name="user.name"
      :comments="[user.comments]"
    />
  </div>
</template>

<script>
import SeePost from '@/components/Post'
export default {
  name: 'Posts',
  components: { SeePost },
  data () {
    return {
      users: [],
      content: ''
    }
  },
  async mounted () {
    const response = await this.$axios.get('/posts')
    this.users = response.data
  },
  methods: {
    async addComment (id, name) {
      return await this.$axios.post('/comments', { name, postId: id })
    }
  }
}
</script>
