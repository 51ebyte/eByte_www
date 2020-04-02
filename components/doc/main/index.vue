<template>
  <div class="main">
    <Row :gutter="10">
      <Col span="4">
        <Affix :offset-top="75">
          <e-nav></e-nav>
        </Affix>
      </Col>
      <Col span="20">
        <nuxt class="markdown-body" />
      <e-footer></e-footer>
      </Col>
    </Row>
  </div>
</template>

<script>
import eFooter from './footer.vue';
import eNav from '../nav/weixin.vue';
export default {
  components: {
    eNav,
    eFooter
  }
};
</script>

<style lang="less">
@import url('./index.less');
</style>
