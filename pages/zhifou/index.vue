<template>
  <div class="main">
    <div class="container">
      <Row :gutter="10">
        <Col span="2">
          <ul class="nav_com">
            <li>推荐</li>
            <li>动态</li>
            <li>java</li>
          </ul>
        </Col>
        <Col span="16">
          <Card :bordered="false">
            <p slot="title">最新文章</p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="ios-loop-strong"></Icon>
                更多
            </a>
            <List item-layout="vertical">
              <ListItem v-for="item in article" :key="item.title">
                  <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.excerpt" />
                  <template slot="action">
                      <li><Icon type="ios-thumbs-up" />&nbsp;{{item.like}}</li>
                      <li><Icon type="md-eye" />&nbsp;{{item.hits}}</li>
                      <li><Icon type="ios-time" />&nbsp;{{item.create_time}}</li>
                      <li><router-link :to="{path:'/zhifou/article/details/'+item.uniqid}">查看详情</router-link></li>
                  </template>
                  <template slot="extra" v-if="item.thumbnail">
                      <img :src="item.thumbnail" style="width: 280px">
                  </template>
              </ListItem>
            </List>
          </Card>
        </Col>
        <Col span="6">
          <Card>
            <p slot="title">精品</p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="ios-loop-strong"></Icon>
                Change
            </a>
            <List size="small">
              <ListItem v-for="item in article" :key="item.title">
                 {{ item.title }}
              </ListItem>
            </List>
          </Card>
          <Card>
            <p slot="title">置顶</p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="ios-loop-strong"></Icon>
                Change
            </a>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'zhifou',
  asyncData(context) {
    let title = context.app.head.title;
    return { title: title + '-知否' };
  },
  head() {
    return {
      title: this.title
    };
  },
  data(){
    return{
      article:[]
    }
  },
  mounted() {
    this.$axios.get('/admin/portal/article/data/read').then(result=>{
      this.article=result
      console.log(result)
    })
  }
};
</script>


<style lang="less">
@import url('./index.less');
</style>
