## 下载
 点击[此处](http://sdk.51ebyte.com/download/eByteSDK_WeiXin)下载开发包

## 实例化
### 方法一

```java
/**
 * 初始化微信公众号
 * 
 * @param appid  开发凭证
 * @param secret 开发密钥
 * @return
 */
Wechat.officialAccount(String appid,String secret);
```
>示例

```java
package com.main;

import com.ebyte.officialAccount.OfficialAccount;
import com.ebyte.weixin.Wechat;

public class Index {
    static String appid = "wx5ddb95e1baae0d7f";
    static String secret = "c5e6aeb09061d2b83e6959dfc9fb7e50";
    static OfficialAccount officialAccount = Wechat.officialAccount(appid, secret);
    public static void main(String[] args) throws Exception {
        System.out.println(officialAccount);
    }
}
```

> 配置扩展

```java
/**
 * 设置应用授权作用域
 * @param scope 固定值snsapi_base,snsapi_userinfo
 * @throws Exception
 */
officialAccount.setOauthScopes(String scope);
```

```java
/**
 * 设置授权后重定向的回调链接地址
 * @throws Exception
 */
officialAccount.setOauthCallback(URL redirect_url);
```

```java
/**
 * 设置服务器令牌
 * @param token
 * @throws Exception
 */
officialAccount.setToken(String token);
```

```java
/**
 * 设置消息加解密密钥
 * @param aes_key
 * @throws Exception
 */
officialAccount.setAesKey(String aes_key);
```


### 方法二

```java
/**
 * 初始化微信公众号
 * 
 * @param appid     开发凭证
 * @param secret    开发密钥
 * @param scopes    授权方式，默认snsapi_base，非必需
 * @param oauth_url 网页授权回调地址
 * @param token     令牌
 * @param aes_key   消息加解密密钥
 * @return
 */
Wechat.officialAccount(String appid, String secret, String scopes, URL oauth_url,String token, String aes_key);
```
>示例

```java
package com.main;

import com.ebyte.officialAccount.OfficialAccount;
import com.ebyte.weixin.Wechat;

public class Index {
    static String appid = "wx5ddb95e1baae0d7f";
    static String secret = "c5e6aeb09061d2b83e6959dfc9fb7e50";
    static String scopes = "snsapi_userinfo"; 
    static URL oauth_url = "http://www.51ebyte.com/weixin/oauth/callback";
    static String token = "token";
    static String aes_key = "";
    static OfficialAccount officialAccount = Wechat.officialAccount(String appid, String secret, String scopes, URL oauth_url,String token, String aes_key);
    public static void main(String[] args) throws Exception {
        System.out.println(officialAccount);
    }
}

```

### 方法三
```java
Wechat.officialAccount();
```
> 此方法会自动读取资源目录下的==weixin.properties==文件的配置内容，文件配置格式为==key=value==格式，当然你也可以自定义文件名称，目前仅支持==properties==和==ini==格式文件，例如:
```java
Wechat.officialAccount("wechat.properties");
Wechat.officialAccount("wechat.ini");
```

> 配置文件一览
```ini

  # 开发者调试模式
  debug=true

  ## 微信公众号配置
  # 开发凭证
  appid=wx5ddb95e1baae0d7f
  # 开发密钥
  secret=c5e6aeb09061d2b83e6959dfc9fb7e50
  # 授权方式
  scopes=
  # 网页授权回调地址
  oauth_url=

  ##服务器配置
  # 服务器地址
  url=
  # 令牌
  token=
  # 消息加解密密钥
  aes_key=

  ## 微信支付配置
  # 商户id
  mch_id=
  # 商户密钥
  mch_key=
  # 支付通知地址
  notify_url=
  #证书路径
  cert_path=
  #证书密码
  cert_secret=
```
