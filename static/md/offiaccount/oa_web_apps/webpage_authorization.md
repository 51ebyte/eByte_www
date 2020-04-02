
#### 网页授权
##### 发起授权
```java
URL redirect_url = new URL("http://www.sunlue.com"); //授权后重定向的回调链接地址
officialAccount.oauth
    .scopes("snsapi_userinfo") //应用授权作用域，默认静默授权（snsapi_base）
    .state("1234") //重定向后会带上state参数，开发者可以填写a-zA-Z0-9的参数值，最多128字节
    .redirect(HttpServletResponse response, redirect_url);
```

##### 拉取用户信息
```java
/**
 * 获取授权用户信息
 * @param request
 * @return
 * @throws Exception
 */
officialAccount.oauth.user(HttpServletRequest request);
```
