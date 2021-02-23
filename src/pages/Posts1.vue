<template>
  <Layout>
    <div>
      <h1>Posts 1</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </Layout>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Posts1',
  data () {
    return {
      posts: []
    }
  },
  async created () {
    // 开源接口数据测试网址 https://jsonplaceholder.typicode.com
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    this.posts = data
  }
}
</script>

<style>

</style>
