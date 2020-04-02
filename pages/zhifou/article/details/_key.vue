<template>
  <div class="details">details</div>
</template>

<script>
export default {
  layout: 'zhifou',
  asyncData(context) {
    let title = context.app.head.title;
    let key = context.route.params.key;
    return { title: title };
  },
  mounted() {
    let key = this.$route.params.key;
    console.log(key);
  }
};
</script>

<style></style>
