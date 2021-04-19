module.exports = {
  title: '小高的博客',
  description: 'javaScript',
  dest: "./dist",
  base: '/book/', // gitHub 项目名称
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: 'CSS', link: '/Css/' },
      { text: 'JavaScript', link: '/JavaScript/' },
      { text: 'Http', link: '/Http/' },
      { text: 'NodeJs', link: '/NodeJs/' }
    ],
    sidebar: [
      {
        title: '前言',
        path: '/preface',
        children: [
        ]
      },
      {
        title: 'CSS',
        path: '/Css/'
      },
      {
        title: 'JavaScript',
        path: '/JavaScript/'
      },
      {
        title: 'Http',
        path: '/Http/'
      },
      {
        title: 'NodeJs',
        path: '/NodeJs/'
      },    ],
    // sidebar: {
    //   '/preface/': [{
    //     title: '前言',
    //   }],
    //   '/CssBook/': [
    //     {
    //       title: 'CSS',
    //       collapsable: true, //控制是否永远都是展开
    //       children: [
    //         // ['/CssBook/CSSselector','css选择器'],
    //       ]
    //     }
    //   ]
    // },
  }
}