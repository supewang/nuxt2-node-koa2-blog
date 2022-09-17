import Vue from 'vue'
// import 'highlight.js/styles/purebasic.css';
const hljs = require('highlight.js')
const md = require('markdown-it')({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(str, {
            language: lang,
            ignoreIllegals: true,
          }).value +
          '</code></pre>'
        )
      } catch (__) { }
    }
    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
    )
  },
})
// 自定义指令 v-highlight
Vue.directive('highlight', {
  // 被绑定元素插入父节点时调用
  inserted(el) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
})
Vue.prototype.$md = md;
export default md;
