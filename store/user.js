import apiUrl from '@/plugins/apiUrl.js'
export default {
  state: {
    isLogin: false,
    userInfo: {},
    userAuth: {}
  },
  mutations: {
    SET_LOGIN: (state, data) => {
      state.isLogin = data
    },
    SET_USER_INFO: (state, data) => {
      state.userInfo = data
    },
    SET_USER_AUTH: (state, data) => {
      state.userAuth = data;
    },
    REFRESH_LOGIN: (state, data) => {
      let user_info = JSON.parse(sessionStorage.getItem('user_info'));
      let user_auth = sessionStorage.getItem('user_auth');
      state.isLogin = data;
      state.userInfo = user_info
      state.userAuth = user_auth != 'ALL' ? JSON.parse(user_auth) : user_auth;
    }
  },
  getters: {
    userInfo: state => {
      return state.userInfo;
    },
    userAuth: state => {
      return state.userAuth;
    }
  },
  actions: {
    async signin({commit}, params) {
      return new Promise((resolve, reject) => {
        this.$axios.post(apiUrl.userLogin, params).then((data) => {
          if (!data.is_manage) {
            commit('SET_USER_AUTH', data.user_auth);
            sessionStorage.setItem('user_auth', JSON.stringify(data.user_auth));
          } else {
            commit('SET_USER_AUTH', 'ALL');
            sessionStorage.setItem('user_auth', 'ALL');
          }
          commit('SET_LOGIN', true);
          commit('SET_USER_INFO', data.user_info);
          sessionStorage.setItem('isLogin', true);
          sessionStorage.setItem('user_info', JSON.stringify(data.user_info));
          resolve(data);
        }).catch(err => {
          reject(err)
        })
      })
    },
    async signup({commit},params){
      return new Promise((resolve,reject)=>{
        this.$axios.post(apiUrl.user.signup,params).then(data=>{
          resolve(data);
        }).catch(err=>{
          reject(err);
        })
      });
    }
  }
}
