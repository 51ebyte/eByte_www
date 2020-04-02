import iView from 'view-design';
export default function({$axios,redirect}) {
  $axios.setHeader('access-token','aaaaaa');
  $axios.setToken("http://www.baidu.coma")
  // $axios.setBaseURL("http://api.ebyte.com3")
  $axios.onRequest(config => {
    $nuxt.$loading.start();
  })
  $axios.onResponse(response => {
    const result = response.data;
    if (result.code !== 200) {
    	if (result.info != '' && result.info != undefined) {
        $nuxt.$loading.fail();
        iView.Message.error({
        	content: result.info,
        	duration: 5
        })
        return Promise.reject(result.info);
    	}
    } else {
      $nuxt.$loading.finish();
    	return Promise.resolve(result.data?result.data:result);
    }
  })
  $axios.onError(error => {
    $nuxt.$loading.fail();
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      // redirect('/400')
    }
  })
}
