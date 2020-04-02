<template>
  <div class="menu-nav">
    <div :class="[navBar.length > 0 ? 'scroll' : 'empty']">
      <template v-if="navBar.length > 0">
        <Menu theme="light" width="auto" :open-names="openMenu" :active-name="activeMenu" :accordion="true">
          <template v-for="(item, i) in navBar">
            <MenuGroup :title="item.text" :key="'m_' + i" v-if="navType == 'group'">
              <template v-for="(child, j) in item.children">
                <MenuItem :name="item.name + '-' + child.name" :key="j" :to="{ path: replace_all(item) + child.name }">
                  <Icon :key="'c_i_' + j" type="md-document" />
                  <span :key="'c_s_' + j">{{ child.text }}</span>
                </MenuItem>
              </template>
            </MenuGroup>
            <Submenu :name="item.name" :key="'m_' + i" v-else>
              <template slot="title">
                {{ item.text }}
              </template>
              <template v-for="(child, j) in item.children">
                <MenuItem :name="item.name + '-' + child.name" :key="'c_' + j" :to="{ path: replace_all(item) + child.name }">
                  <span :key="'c_s_' + j">{{ child.text }}</span>
                </MenuItem>
              </template>
            </Submenu>
          </template>
        </Menu>
      </template>
    </div>
  </div>
</template>

<script>
import pay from './weixin/pay.js';
import offiaccount from './weixin/offiaccount.js';
export default {
  data() {
    return {
      navType: 'c',
      navList: {
        pay: pay,
        offiaccount: offiaccount
      },
      openMenu: [],
      activeMenu: ''
    };
  },
  created() {
    let id = this.$route.params.id;
    let module = this.$route.params.module;
    if (module != undefined || id != undefined) {
      this.openMenu.push(module);
      this.activeMenu = module + '-' + id;
    }
  },
  computed: {
    navBar: function() {
      let route = this.$route.name;
      if (route != null) {
        let weixin = route.split('-');
        return weixin[3] ? this.navList[weixin[3]] : {};
      } else {
        return {};
      }
    }
  },
  methods: {
    replace_all(item) {
      let weixin = this.$route.name.split('-');
      return '/sdk/doc/weixin/' + weixin[3] + '/' + item.name + '/';
    }
  }
};
</script>

<style lang="less">
@import url('./weixin.less');
</style>
