<template>
  <div class="doc">
    <e-header :apps="false" :search="false"></e-header>
    <div class="main">
      <Row :gutter="10">
        <template v-for="(item,index) in doc">
          <Col span="6" :key="index">
            <Card :title="item.text" :padding="0" shadow :key="index">
              <CellGroup>
                <template v-for="(child,j) in item.children">
                  <Cell :title="child.text" :key="j" disabled  v-if="!child.path" />
                  <Cell :title="child.text" :to="{path:child.path}" :key="j" v-else />
                </template>
              </CellGroup>
            </Card>
          </Col>
        </template>
      </Row>
    </div>
    <e-footer></e-footer>
  </div>
</template>

<script>
import eHeader from '@/components/doc/header/index.vue';
import eFooter from '@/components/doc/main/footer.vue';
export default {
  components: {
    eHeader,
    eFooter
  },
  data() {
    return {
      doc:[{
        text:'微信',
        children:[
          {text:'小程序',path:''},
          {text:'小游戏',path:''},
          {text:'公众号',path:'/sdk/doc/weixin/offiaccount/started/overview'},
          {text:'智能对话',path:''},
          {text:'开放平台',path:''},
          {text:'企业微信',path:''},
          {text:'微信支付',path:'/sdk/doc/weixin/pay/started/overview'},
          {text:'腾讯小微',path:''},
        ]
      },{
        text:'短信',
        children:[
          {text:'阿里云通信',path:''},
          {text:'腾讯云通信',path:''},
        ]
      }]
    };
  }
};
</script>

<style lang="less">
@import url('./index.less');
</style>
