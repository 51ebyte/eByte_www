#### 创建菜单
```java
/**
 * 创建菜单
 * 
 * @param menu
 * @throws Exception
 */
officialAccount.menu.create(JSONArray menu);
```
> 示例
```java
try {
    
    JSONObject sub_button_item = new JSONObject();
        sub_button_item.put("type", "view");
        sub_button_item.put("name", "搜索");
        sub_button_item.put("url", "http://www.soso.com/");
        
    JSONObject sub_button_item1 = new JSONObject();
        sub_button_item1.put("type", "miniprogram");
        sub_button_item1.put("name", "wxa");
        sub_button_item1.put("url", "http://mp.weixin.qq.com");
        sub_button_item1.put("appid", "wx286b93c14bbf93aa");
        sub_button_item1.put("pagepath", "pages/lunar/index");
    
    JSONObject sub_button_item2 = new JSONObject();
        sub_button_item2.put("type", "click");
        sub_button_item2.put("name", "赞一下我们");
        sub_button_item2.put("key", "V1001_GOOD");
    
    JSONArray sub_button = new JSONArray();
        sub_button.add(sub_button_item);
        sub_button.add(sub_button_item1);
        sub_button.add(sub_button_item2);
    
    JSONObject button = new JSONObject();
        button.put("type", "click");
        button.put("name", "今日歌曲");
        button.put("key", "V1001_TODAY_MUSIC");
    
    JSONObject button1 = new JSONObject();
        button1.put("name", "菜单");
        button1.put("sub_button", sub_button);
    
    JSONArray menu = new JSONArray();
        menu.add(button);
        menu.add(button1);
    
    officialAccount.menu.create(menu);
} catch (Exception e) {
    e.printStackTrace();
}
```
