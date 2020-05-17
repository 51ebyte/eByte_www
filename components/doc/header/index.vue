<template>
  <div class="header">
    <div class="container">
      <router-link :to="{ path: '/sdk' }" class="logo">
        <img src="../../../assets/logo/logo.png" />
      </router-link>
      <div class="apps" v-if="apps != false">
        <e-drop-down></e-drop-down>
      </div>
      <div class="search">
        <Select filterable placeholder="搜索API..." not-found-text="无匹配API" @on-change="searchChange">
          <template v-for="item in navBar">
            <OptionGroup :label="item.text" :key="item.name">
              <template v-for="child in item.children">
                <Option :value="child.name" :key="child.name">{{ child.text }}</Option>
              </template>
            </OptionGroup>
          </template>
        </Select>
      </div>
      <div class="menu" v-if="menu != false">
        <router-link :to="{ name: 'sdk-doc' }" :class="[navActive == 'doc' ? 'active' : '']">文档</router-link>
        <a href="https://github.com/51ebyte/eByteSDK_WeiXin" target="_blank">Github</a>
        <a href="https://gitee.com/bytegeek/eByteSDK_WeiXin" target="_blank">Gitee</a>
      </div>
      <div class="info">
        <e-info></e-info>
        <div class="more"><Icon type="md-more" size="24" color="#333333" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import navList from '../nav/index.js';
import eDropDown from '@/components/doc/dropdown/index.vue';
import eInfo from '@/components/doc/header/info.vue';
export default {
  components: {
    eDropDown,
    eInfo
  },
  props: {
    apps: {
      default: true
    },
    search: {
      default: true
    },
    menu: {
      default: true
    }
  },
  computed: {
    navBar: function() {
      let route = this.$route.name;
      if (route != null) {
        let routes = route.split('-');
        if (routes[2] && routes[3]) {
          let docType = routes[3].replace(routes[3][0], routes[3][0].toUpperCase());
          return navList[routes[2] + docType];
        }
      }
      return [];
    },
    navActive: function() {
      let route = this.$route.name;
      if (route != null) {
        return route.split('-')[1];
      }
      return '';
    }
  },
  methods: {
    searchChange(value) {
    }
  }
};
</script>

<style lang="less">
@import url('./index.less');
</style>
