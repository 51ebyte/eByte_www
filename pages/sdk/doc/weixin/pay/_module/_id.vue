<template>
    <no-ssr>
      <mavon-editor :toolbarsFlag="false" :subfield="false" defaultOpen="preview" v-model="html"/>
    </no-ssr>
</template>

<script>
import m from './_id.js';
export default {
  layout:'doc_weixin',
  data() {
    return {
      title: '',
      html: '',
    };
  },
  asyncData(context) {
    let title = context.app.head.title;
    let module = context.route.params.module;
    let id = context.route.params.id;
    let queryTitle = m[module + '-' + id];
    if (queryTitle != undefined && queryTitle != '') {
      title = title + '-' + queryTitle;
    }
    return { title: title };
  },
  head() {
    return {
      title: this.title
    };
  },
  validate({ params, query }) {
    if (params.module == undefined || params.id == undefined) {
      return false;
    }
    return true;
  },
  mounted() {
    let module = this.$route.params.module;
    let id = this.$route.params.id;
    let filePath = window.location.origin + '/md/pay/' + module + '/' + id + '.md';
    var that = this;
    this.$axios.get(filePath).then((xhr)=>{
      that.html = xhr.data;
    }).catch(err=>{
      this.html="<p style='text-align:center;'>暂无数据</p>";
      console.error(err.message);
    })
  }
};
</script>

<style lang="less">
</style>
