
#### 接收普通消息
```java
response.setCharacterEncoding("UTF-8");
response.setHeader("Content-type", "text/html;charset=UTF-8");

try {
    officialAccount.server.push(HttpServletRequest request, HttpServletResponse response, new ServerCallback() {
        @Override
        public String push(Map<String, Object> message) {
            switch (message.get("MsgType")) {
                case "text":
                    System.out.println("收到文本消息");
                    break;
                case "image":
                    System.out.println("收到图片消息");
                    break;
                case "voice":
                    System.out.println("收到语音消息");
                    break;
                case "video":
                    System.out.println("收到视频消息");
                    break;
                case"shortvideo":
                    System.out.println("收到小视频消息");
                    break;
                case "location":
                    System.out.println("收到坐标消息");
                    break;
                case "link":
                    System.out.println("收到链接消息");
                    break;
                case "event":
                    System.out.println("收到事件消息");
                    break;
                default:
                    System.out.println("收到其它消息");
                    break;
            }
        }
    });
} catch (Exception e) {
    e.printStackTrace();
}
```

> 普通消息回复

```java
try {
  officialAccount.server.push(HttpServletRequest request, HttpServletResponse response, new ServerReplyCallback() {
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

> 消息回复请参考 [被动回复用户消息](/doc/weixin/offiaccount/message/reply_user_message)
