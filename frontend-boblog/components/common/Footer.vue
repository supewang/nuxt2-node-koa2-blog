<template>
  <div class="response-wrap footer">
    <div class="site">
      <span>© 小王博客 - </span>
      <span>1529073449@qq.com</span>
    </div>
    <div class="copyright">
      <a
        class="copyright-link"
        href="https://beian.miit.gov.cn"
        target="_blank"
      >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterIndex',
}
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  margin: 120px auto 64px;
}
.site {
  font-size: 14px;
  color: #666666;
}
.site span {
  margin-right: 24px;
}
.copyright {
  &-link {
    font-size: 14px;
    color: #666666;
    text-decoration: none;
  }
}

@media screen and (max-width: 540px) {
  .footer {
    flex-direction: column;
    margin: 32px auto;
  }
  .copyright {
    margin-top: 10px;
  }
}
</style>
