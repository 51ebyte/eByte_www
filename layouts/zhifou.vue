<template>
  <div class="zhifou">
    <z-header></z-header>
    <nuxt class="main" />
    <z-footer></z-footer>
  </div>
</template>
<script>
import zHeader from '@/components/zhifou/header/index.vue';
import zFooter from '@/components/zhifou/footer/index.vue';
export default {
  components: {
    zHeader,
    zFooter
  },
  asyncData(context) {
    let title = context.app.head.title;
    return { title: title + '知否' };
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>