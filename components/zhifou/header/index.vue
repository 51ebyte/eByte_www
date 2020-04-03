<template>
  <Affix>
    <div class="header">
      <div class="container">
        <div class="top">
          <router-link :to="{ name: 'zhifou' }" class="logo">
						<img src="../../../assets/logo/geek.png" />
					</router-link>
          <div class="search">
            <div class="tab"><span class="active">文章</span></div>
            <div class="input">
              <Icon type="ios-search-outline" />
              <input type="text" placeholder="关于 2020 年的前端趋势预测" />
              <button>搜索</button>
            </div>
            <div class="tag">
              <a href="https://www.aliyun.com/ss/?k=云服务器 ECS">云服务器 ECS</a>
              <a href="https://www.aliyun.com/ss/?k=云数据库 RDS MySQL 版">云数据库 RDS MySQL 版</a>
              <a href="https://www.aliyun.com/ss/?k=企业邮箱">企业邮箱</a>
              <a href="https://www.aliyun.com/ss/?k=商标服务">商标服务</a>
              <a href="https://www.aliyun.com/ss/?k=对象存储 OSS">对象存储 OSS</a>
            </div>
          </div>
          <div class="topbar">
            <router-link :to="{ name: 'user-signin' }" class="login">登录</router-link>
            <router-link :to="{ name: 'user-signup' }" class="register">免费注册</router-link>
          </div>
        </div>
        <Menu mode="horizontal" class="nav">
          <MenuItem name="1">首页</MenuItem>
          <Submenu name="2">
            <template slot="title">
              前端
            </template>
            <MenuItem name="2-1">vue.js</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              后端
            </template>
            <MenuItem name="3-1">java</MenuItem>
          </Submenu>
        </Menu>
      </div>
    </div>
  </Affix>
</template>

<script></script>

<style lang="less">
@import url('./index.less');
</style>
