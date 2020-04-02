
#### 接收事件消息

```java
response.setCharacterEncoding("UTF-8");
response.setHeader("Content-type", "text/html;charset=UTF-8");

try {
  officialAccount.server.push(HttpServletRequest request, HttpServletResponse response, new ServerEventCallback() {
    @Override
    public void push(Map<String, String> message) {
      System.out.println(message);
    }
  });
} catch (Exception e) {
  e.printStackTrace();
}
```
> 可回复的事件消息
```java
response.setCharacterEncoding("UTF-8");
response.setHeader("Content-type", "text/html;charset=UTF-8");

try {
  officialAccount.server.push(null, null, new ServerEventReplyCallback() {
    @Override
    public String push(Map<String, String> message, Message reply) {
      try {
        /**回复给微信服务器text消息**/
        return reply.text("text");
      } catch (Exception e) {
        e.printStackTrace();
      }
      /**告诉微信服务器已经接收到消息**/
      return "我已经收到消息了";
    }
  });
} catch (Exception e) {
  e.printStackTrace();
}
```

> 某些事件推送在发生后，是允许开发者回复用户的，某些则不允许，详细内容请参考[微信文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Receiving_event_pushes.html)
> 更多消息回复请参考 [被动回复用户消息](/doc/weixin/offiaccount/message/reply_user_message)
