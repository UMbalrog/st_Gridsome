<template>
  <Layout>
    <div>
      <h1>Posts 2</h1>
      <ul>
        <li v-for="edge in $page.allPost.edges" :key="edge.node.id">
          <g-link :to="'/'">{{ edge.node.title }}</g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query {
  allPost {
    edges {
      node {
        id
        title
        content
      }
    }
  }
}
</page-query>

<script>
import axios from 'axios'

export default {
  name: 'Posts2',
  data () {
    return {
      posts: []
    }
  },
  created () {
    console.log(this.$page)
  }
}
</script>

<style>

</style>
