<template>
  <div class="home">
    <div class="container">
      <Row :gutter="10">
        <Col span="2">
          <Affix :offset-top="70">
            <ul class="nav_com">
              <li class="active">推荐</li>
              <li v-for="(item,index) in nav" :key="index">{{item.name}}</li>
            </ul>
          </Affix>
        </Col>
        <Col span="16">
          <Affix :offset-top="60"  v-if="is_recom">
            <div class="new-recom">
              <a href="javascript:;">您有新的推荐，点击查看</a>
              <Icon type="ios-close" @click="is_recom=false"/>
            </div>
          </Affix>
          <Card>
            <List item-layout="vertical" class="article-list">
              <ListItem v-for="(item,index) in article" :key="index">
                <ListItemMeta :avatar="item.avatar" :description="item.excerpt">
                  <template slot="title">
                    <router-link :to="{path:'/zhifou/article/details/'+item.uniqid}">{{item.title}}</router-link>
                  </template>
                </ListItemMeta>
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
            <p slot="title">今日推荐</p>
            <List size="small" class="recom-list">
              <ListItem v-for="(item,index) in recom" :key="index">
                <ListItemMeta :avatar="item.avatar" :description="item.excerpt">
                  <template slot="title">
                    <router-link :to="{path:'/zhifou/article/details/'}">{{item.title}}</router-link>
                  </template>
                </ListItemMeta>
              </ListItem>
            </List>
          </Card>
          <Card>
            <p slot="title">企业博客</p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="ios-loop-strong"></Icon>
                申请企业博客
            </a>
            <ul class="blog-list">
              <li v-for="(item,index) in article" :key="index">
                <img class="l" :src="item.avatar" />
                <div class="r">
                  <p class="title">
                    <a href="javascript:;" class="text">{{item.title}}</a>
                    <svg class="icon" width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-1188.000000, -781.000000)">
                              <g transform="translate(1187.000000, 780.000000)">
                                  <polygon id="Star-Copy" fill="#2E98FF" fill-rule="evenodd" points="8 14.4194952 6.94410373 14.6666667 6.0162669 14.1053027 4.93566968 14.0140869 4.22671542 13.1934807 3.22719363 12.7728064 2.80651932 11.7732846 1.98591312 11.0643303 1.89469729 9.9837331 1.33333333 9.05589627 1.58050484 8 1.33333333 6.94410373 1.89469729 6.0162669 1.98591312 4.93566968 2.80651932 4.22671542 3.22719363 3.22719363 4.22671542 2.80651932 4.93566968 1.98591312 6.0162669 1.89469729 6.94410373 1.33333333 8 1.58050484 9.05589627 1.33333333 9.9837331 1.89469729 11.0643303 1.98591312 11.7732846 2.80651932 12.7728064 3.22719363 13.1934807 4.22671542 14.0140869 4.93566968 14.1053027 6.0162669 14.6666667 6.94410373 14.4194952 8 14.6666667 9.05589627 14.1053027 9.9837331 14.0140869 11.0643303 13.1934807 11.7732846 12.7728064 12.7728064 11.7732846 13.1934807 11.0643303 14.0140869 9.9837331 14.1053027 9.05589627 14.6666667"></polygon>
                                  <circle id="Oval-4" fill="#FFFFFF" fill-rule="evenodd" cx="8" cy="8" r="5"></circle>
                                  <polygon id="Path-53" fill="#2E98FF" fill-rule="nonzero" points="10.5843232 5.56002551 11.6842671 6.65996939 7.23407122 11.1101653 4.68662745 8.56272151 5.78657133 7.46277763 7.23407122 8.91027751"></polygon>
                              </g>
                          </g>
                      </g>
                    </svg>
                  </p>
                  <p class="detail">
                    <span class="name">原创</span>
                    <span class="number">27</span>
                    <span class="name">粉丝</span><span class="number">128</span>
                    <span class="name">获赞</span><span class="number">8</span>
                  </p>
                </div>
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
    <BackTop></BackTop>
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
      nav:[
        {name:'动态'},
        {name:'前端'},
        {name:'云计算/大数据'},
        {name:'java'},
        {name:'php'},
        {name:'vue'},
        {name:'移动开发'},
        {name:'运维'},
        {name:'安全'},
        {name:'物联网'},
        {name:'计算机基础'},
        {name:'5G'},
        {name:'区块链'},
        {name:'程序人生'},
      ],
      is_recom:true,
      article:[{
        avatar:'https://profile.csdnimg.cn/2/E/0/3_sinat_33921105',
        title:'这些软件太强了，Windows必装！尤其程序员',
        excerpt:'Windows可谓是大多数人的生产力工具，集娱乐办公于一体，虽然在程序员这个群体中都说苹果是信仰，但是大部分不都是从Windows过来的，而且现在依然有很多的程序员用Windows。Windows可谓是大多数人的生产力工具，集娱乐办公于一体，虽然在程序员这个群体中都说苹果是信仰，但是大部分不都是从Windows过来的，而且现在依然有很多的程序员用Windows。Windows可谓是大多数人的生产力工具，集娱乐办公于一体，虽然在程序员这个群体中都说苹果是信仰，但是大部分不都是从Windows过来的，而且现在依然有很多的程序员用Windows。Windows可谓是大多数人的生产力工具，集娱乐办公于一体，虽然在程序员这个群体中都说苹果是信仰，但是大部分不都是从Windows过来的，而且现在依然有很多的程序员用Windows。',
        like:20,
        hits:20,
        create_time:'2020-04-03',
        uniqid:''
      },{
        avatar:'https://profile.csdnimg.cn/2/E/0/3_sinat_33921105',
        title:'史上最全的IDEA快捷键总结',
        excerpt:'现在Idea成了主流开发工具，这篇博客对其使用的快捷键做了总结，希望对大家的开发工作有所帮助。',
        like:20,
        hits:20,
        create_time:'2020-04-02',
        uniqid:''
      },{
        avatar:'https://profile.csdnimg.cn/2/E/0/3_sinat_33921105',
        title:'史上最全的IDEA快捷键总结',
        excerpt:'现在Idea成了主流开发工具，这篇博客对其使用的快捷键做了总结，希望对大家的开发工作有所帮助。',
        like:20,
        hits:20,
        create_time:'2020-04-02',
        uniqid:''
      },{
        avatar:'https://profile.csdnimg.cn/2/E/0/3_sinat_33921105',
        title:'史上最全的IDEA快捷键总结',
        excerpt:'现在Idea成了主流开发工具，这篇博客对其使用的快捷键做了总结，希望对大家的开发工作有所帮助。',
        like:20,
        hits:20,
        create_time:'2020-04-02',
        uniqid:''
      },{
        avatar:'https://profile.csdnimg.cn/2/E/0/3_sinat_33921105',
        title:'史上最全的IDEA快捷键总结',
        excerpt:'现在Idea成了主流开发工具，这篇博客对其使用的快捷键做了总结，希望对大家的开发工作有所帮助。',
        like:20,
        hits:20,
        create_time:'2020-04-02',
        uniqid:''
      },{
        avatar:'https://profile.csdnimg.cn/2/E/0/3_sinat_33921105',
        title:'史上最全的IDEA快捷键总结',
        excerpt:'现在Idea成了主流开发工具，这篇博客对其使用的快捷键做了总结，希望对大家的开发工作有所帮助。',
        like:20,
        hits:20,
        create_time:'2020-04-02',
        uniqid:''
      },{
        avatar:'https://profile.csdnimg.cn/2/E/0/3_sinat_33921105',
        title:'史上最全的IDEA快捷键总结',
        excerpt:'现在Idea成了主流开发工具，这篇博客对其使用的快捷键做了总结，希望对大家的开发工作有所帮助。',
        like:20,
        hits:20,
        create_time:'2020-04-02',
        uniqid:''
      },{
        avatar:'https://profile.csdnimg.cn/2/E/0/3_sinat_33921105',
        title:'史上最全的IDEA快捷键总结',
        excerpt:'现在Idea成了主流开发工具，这篇博客对其使用的快捷键做了总结，希望对大家的开发工作有所帮助。',
        like:20,
        hits:20,
        create_time:'2020-04-02',
        uniqid:''
      },{
        avatar:'https://profile.csdnimg.cn/2/E/0/3_sinat_33921105',
        title:'史上最全的IDEA快捷键总结',
        excerpt:'现在Idea成了主流开发工具，这篇博客对其使用的快捷键做了总结，希望对大家的开发工作有所帮助。',
        like:20,
        hits:20,
        create_time:'2020-04-02',
        uniqid:''
      }],
      recom:[{
        avatar:'https://csdnimg.cn/feed/20200330/ed067fdeaa9b7966d0746a8be457629d.jpg?x-oss-process=image/resize,h_64',
        title:'「百万人学AI」—开发者与AI大调查',
      },{
        avatar:'https://csdnimg.cn/feed/20200402/70ec79b6dd3f58ee7e5f2aa871a4797f.jpg?x-oss-process=image/resize,h_64',
        title:'Spark3.0发布了，代码拉过来，打个包，跑起来！| 附源码编译'
      }]
    }
  },
  mounted() {
    // this.$axios.get('/admin/portal/article/data/read').then(result=>{
    //   this.article=result
    //   console.log(result)
    // })
  }
};
</script>


<style lang="less">
@import url('./index.less');
</style>
