// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '公共title',
  siteDescription: '网站描述',
  plugins: [],
  templates: {
    Post: [
      {
        path: '/posts/:id',
        component: './src/templates/Post.vue'
      }
    ]
  },
  plugins:[
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/blog/**/*.md',
        typeName: 'BlogPost',
        remark: {
          //Config options can be added here
        }
      }
    }
  ]
}
