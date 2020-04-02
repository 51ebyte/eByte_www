#### 接入指南
##### 方法一

```java
/**
 * 接入微信服务器开发
 * 
 * @param response
 * @param request
 * @param token
 * @throws IOException
 */
officialAccount.join(HttpServletResponse response,HttpServletRequest request,String token);
```

> 示例

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    response.setHeader("Content-type", "text/html;charset=UTF-8");
    response.setCharacterEncoding("UTF-8");
    String token = "wxToken";
    officialAccount.join(response, request, token);
}
```

##### 方法二
```java
/**
 * 接入微信服务器开发
 * 
 * @param response
 * @param token Token
 * @param timestamp 时间戳
 * @param nonce 随机数
 * @param signature 签名
 * @param echostr 随机字符串
 * @throws IOException
 */
officialAccount.join(HttpServletResponse response, String token, String timestamp, String nonce, String signature, String echostr);
```

> 示例
```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    response.setHeader("Content-type", "text/html;charset=UTF-8");
    response.setCharacterEncoding("UTF-8");
    String token = "wxToken";
    String signature = request.getParameter("signature");
    String timestamp = request.getParameter("timestamp");
    String nonce = request.getParameter("nonce");
    String echostr = request.getParameter("echostr");
    officialAccount.join(response, token, timestamp, nonce, signature, echostr);
}
```
