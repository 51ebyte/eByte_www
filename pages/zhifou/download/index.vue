<template>
  <div class="download">
    <Affix :offset-top="60">
      <div class="nav">
        <ul>
          <li class="active"><router-link :to="{}">下载首页</router-link></li>
          <li><router-link :to="{}">精品专辑</router-link></li>
          <li><router-link :to="{}">我的资源</router-link></li>
          <li><router-link :to="{}">我的收藏</router-link></li>
          <li><router-link :to="{}">已下载</router-link></li>
          <li>
            <a class="nav_upload" href="https://download.csdn.net/upload">
              <img class="img_upload" src="//csdnimg.cn/release/download/static_files/pc/images/upload.png" />
              <span>上传资源赚积分,得勋章</span>
            </a>
          </li>
        </ul>
      </div>
    </Affix>
    <Affix :offset-top="88">
      <div class="type">
        <span class="text">类型：</span>
        <ul class="item-list">
          <li class="active">全部</li>
          <li>前端</li>
          <li>后端</li>
          <li>php</li>
          <li>java</li>
          <li>移动开发</li>
        </ul>
      </div>
    </Affix>
    <div class="list">
      <Card>
        <List item-layout="vertical">
          <ListItem v-for="item in data" :key="item.title">
            <!-- <ListItemMeta :avatar="item.avatar" :title="item.title" /> -->
            <div class="list-box">
              <a href="javascript:;" class="icon"><img :src="item.avatar" /></a>
              <div class="main">
                <a href="javascript:;" class="title">{{ item.title }}</a>
                <ul class="action">
                  <li>
                    <!-- <Icon type="ios-thumbs-up-outline" /> -->
                    点赞（234）
                  </li>
                  <li>
                    <!-- <Icon type="ios-chatbubbles-outline" /> -->
                    评论（345）
                  </li>
                  <li>
                    <!-- <Icon type="ios-star-outline" /> -->
                    收藏（345）
                  </li>
                  <li>
                    <!-- <Icon type="md-share" /> -->
                    分享（345）
                  </li>
                  <li>资源大小：500M</li>
                  <li>下载积分：500</li>
                  <li>上传者：字节极客</li>
                  <li>上传时间：2020-04-05 13:00:00</li>
                </ul>
              </div>
              <div class="extra"><Button>立即下载</Button></div>
            </div>
            <template slot="action" v-if="false">
              <li>
                <!-- <Icon type="ios-thumbs-up-outline" /> -->
                点赞（234）
              </li>
              <li>
                <!-- <Icon type="ios-chatbubbles-outline" /> -->
                评论（345）
              </li>
              <li>
                <!-- <Icon type="ios-star-outline" /> -->
                收藏（345）
              </li>
              <li>
                <!-- <Icon type="md-share" /> -->
                分享（345）
              </li>
              <li>资源大小：500M</li>
              <li>下载积分：500</li>
              <li>上传者：字节极客</li>
              <li>上传时间：2020-04-05 13:00:00</li>
            </template>
            <!-- <template slot="extra">
              <Button>立即下载</Button>
            </template> -->
          </ListItem>
        </List>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'zhifou',
  data() {
    return {
      data: [
        {
          title: 'php+mysql源码 在线报名系统 统计导出xls评分',
          description: 'php+mysql源码 在线报名系统 统计导出xls评分',
          avatar: 'https://csdnimg.cn/release/download/static_files/pc/images/minetype/exe.svg'
        },
        {
          title: 'This is title 2',
          description: 'This is description, this is description, this is description.',
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
        },
        {
          title: 'This is title 3',
          description: 'This is description, this is description, this is description.',
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
        }
      ]
    };
  }
};
</script>

<style lang="less">
@import url('./index.less');
</style>
