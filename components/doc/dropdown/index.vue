<template>
  <Dropdown @on-click="dropdownAppsClick">
    <a href="javascript:;" class="dropdown-text">
      <weixin-logo class="apps-img"></weixin-logo>
      <span class="apps-name">eByteSDK_WeiXin</span>
      <Icon type="ios-arrow-down"></Icon>
    </a>
    <DropdownMenu slot="list">
      <Dropdown placement="right-start">
          <DropdownItem name="weixin">
              <weixin-logo class="apps-img"></weixin-logo>
              <span class="apps-name">eByteSDK_WeiXin</span>
            <Icon type="ios-arrow-forward"></Icon>
          </DropdownItem>
          <DropdownMenu slot="list">
            <DropdownItem name="weixin/miniprogram">小程序</DropdownItem>
            <DropdownItem name="weixin/minigame">小游戏</DropdownItem>
            <DropdownItem name="weixin/offiaccount">公众号</DropdownItem>
            <DropdownItem name="weixin/aispeech">智能对话</DropdownItem>
            <DropdownItem name="weixin/oplatform">开放平台</DropdownItem>
            <DropdownItem name="weixin/word">企业微信</DropdownItem>
            <DropdownItem name="weixin/pay">微信支付</DropdownItem>
            <DropdownItem name="weixin/xiaowei">腾讯小微</DropdownItem>
          </DropdownMenu>
      </Dropdown>
      <DropdownItem name="alipay">
        <alipay-logo class="apps-img"></alipay-logo>
        <span class="apps-name">eByteSDK_AliPay</span>
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
  import weixinLogo from '@/components/logo/WeiXin.vue';
  import AlipayLogo from '@/components/logo/Alipay.vue';
  export default{
    components:{
      weixinLogo,
      AlipayLogo,
    },
    methods:{
      dropdownAppsClick(name){
        if(name!=""){
          this.$router.push({
            path: '/sdk/doc/' + name + '/started/overview'
          });
        }else{
          this.$Message.error('暂未开通:'+name);
        }
      },
    }
  }
</script>

<style>
</style>
