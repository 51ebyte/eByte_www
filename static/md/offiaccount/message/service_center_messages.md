
##### 客服管理
###### 添加客服
```java
/**
 * 添加客服
 * 
 * @param account  客服账号
 * @param nickname 客服昵称
 * @param password 客服密码
 * @return
 * @throws Exception
 */
officialAccount.customerServiceMessage.add(String account, String nickname, String password);
```

###### 修改客服
```java
/**
 * 修改客服
 * 
 * @param account  客服账号
 * @param nickname 客服昵称
 * @param password 客服密码
 * @return
 * @throws Exception
 */
officialAccount.customerServiceMessage.update(String account, String nickname, String password);
```

###### 删除客服
```java
/**
 * 删除客服
 * 
 * @param account  客服账号
 * @param nickname 客服昵称
 * @param password 客服密码
 * @return
 * @throws Exception
 */
officialAccount.customerServiceMessage.delete(String account, String nickname, String password);
```

###### 获取客服列表
```java
/**
 * 获取客服列表
 * 
 * @return
 * @throws Exception
 */
officialAccount.customerServiceMessage.getlist();
```

##### 消息转发（将接收到的消息转发给客服）
```java
response.setHeader("Content-type", "text/html;charset=UTF-8");
response.setCharacterEncoding("UTF-8");
try {
    officialAccount.server.push(request, response, new ServerCallback() {
        @Override
        public String push(Map<String, Object> message) {
            try {
                // 转发收到的消息给客服
                return new Transfer();
                // 指定转发给某一个客服
                return new Transfer(String openid);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    });
} catch (Exception e) {
    e.printStackTrace();
}
```

##### 作为客服消息发送（把消息单发给用户）
```java
try {
    officialAccount.customerServiceMessage.text(String text).to(String openid).send();
    officialAccount.customerServiceMessage.image(String media_id).to(String openid).send();
    officialAccount.customerServiceMessage.voice(String media_id).to(String openid).send();
    officialAccount.customerServiceMessage.video(String media_id, String thumb_media_id, String title, String description).to(String openid).send();
    officialAccount.customerServiceMessage.music(String title, String description, String musicurl, String hqmusicurl,
        String thumb_media_id).to(String openid).send();
    officialAccount.customerServiceMessage.news(String title, String description, String url, String picurl).to(String openid).send();
    officialAccount.customerServiceMessage.mpnews(String media_id).to(String openid).send();
    officialAccount.customerServiceMessage.msgmenu(String head_content,String tail_content).to(String openid).send();
} catch (Exception e) {
    // TODO Auto-generated catch block
    e.printStackTrace();
}
```

##### 作为客服消息发送（把消息群发给用户）
```java
try {
    JSONArray user = new JSONArray();
    user.add("o0nOW04PREpZm9kPI3DW4xyQ3KNU1");
    user.add("o0nOW04PREpZm9kPI3DW4xyQ3KNU2");
    officialAccount.customerServiceMessage.text(String text).to(JSONArray openids).send();
    officialAccount.customerServiceMessage.image(String media_id).to(JSONArray openids).send();
    officialAccount.customerServiceMessage.voice(String media_id).to(JSONArray openids).send();
    officialAccount.customerServiceMessage.video(String media_id, String thumb_media_id, String title, String description).to(JSONArray openids).send();
    officialAccount.customerServiceMessage.music(String title, String description, String musicurl, String hqmusicurl,
        String thumb_media_id).to(JSONArray openids).send();
    officialAccount.customerServiceMessage.news(String title, String description, String url, String picurl).to(JSONArray openids).send();
    officialAccount.customerServiceMessage.mpnews(String media_id).to(JSONArray openids).send();
    officialAccount.customerServiceMessage.msgmenu(String head_content,String tail_content).to(JSONArray openids).send();
} catch (Exception e) {
    // TODO Auto-generated catch block
    e.printStackTrace();
}
```

##### 客服输入状态
```java
try {
    //对用户下发“正在输入"状态
    officialAccount.customerServiceMessage.typing(String openid);
    officialAccount.customerServiceMessage.typing(String openid, boolean cancel);
    //例：
    officialAccount.customerServiceMessage.typing("o0nOW04PREpZm9kPI3DW4xyQ3KNU");
    officialAccount.customerServiceMessage.typing("o0nOW04PREpZm9kPI3DW4xyQ3KNU", false);
    //取消对用户下发“正在输入"状态
    officialAccount.customerServiceMessage.typing(String openid, boolean cancel);
    //例：
    officialAccount.customerServiceMessage.typing("o0nOW04PREpZm9kPI3DW4xyQ3KNU", true);
    
} catch (Exception e) {
    e.printStackTrace();
}
```
