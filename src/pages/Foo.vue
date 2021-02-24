<template>
  <Layout>
    <div>Page Foo</div>
    <ul>
      <li v-for="edge in $page.allBlogPost.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
        <div v-html="edge.node.content"></div>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  allBlogPost {
    edges {
      node {
        id
        path
        title
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Pagefoo',
  metaInfo: {
    title: 'foo title'
  }
}
</script>

