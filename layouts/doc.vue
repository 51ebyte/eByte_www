<template>
  <div class="doc">
    <e-header :search="false"></e-header>
    <e-main></e-main>
  </div>
</template>
<script>
import eHeader from '../components/doc/header/index.vue';
import eMain from '../components/doc/main/index.vue';
export default {
  components: {
    eHeader,
    eMain
  }
};
</script>