import Vue from 'vue'

const $apiUrl = {
  user:{
    signin:'account/user/sign_in',
    signup:'account/user/sign_up'
  }
}

Vue.prototype.$apiUrl = $apiUrl
export default $apiUrl;
