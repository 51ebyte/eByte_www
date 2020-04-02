
##### 请求消息的属性
>当你接收到用户发来的消息时，可能会提取消息中的相关属性，参考：
请求消息基本属性(以下所有消息都有的基本属性)：

>ToUserName 接收方帐号（该公众号 ID）
FromUserName 发送方帐号（OpenID, 代表用户的唯一标识）
CreateTime 消息创建时间（时间戳）
MsgId 消息 ID（64位整型）

* 文本
> MsgType text
Content 文本消息内容

    
* 图片

> MsgType image
MediaId 图片消息媒体id，可以调用多媒体文件下载接口拉取数据。
PicUrl 图片链接

    
* 语音

> MsgType voice
MediaId 语音消息媒体id，可以调用多媒体文件下载接口拉取数据。
Format 语音格式，如 amr，speex 等
Recognition * 开通语音识别后才有
请注意，开通语音识别后，用户每次发送语音给公众号时，微信会在推送的语音消息XML数据包中，增加一个 Recongnition 字段
    
* 视频

> MsgType video
MediaId 视频消息媒体id，可以调用多媒体文件下载接口拉取数据。
ThumbMediaId 视频消息缩略图的媒体id，可以调用多媒体文件下载接口拉取数据。

    
* 小视频

> MsgType shortvideo
MediaId 视频消息媒体id，可以调用多媒体文件下载接口拉取数据。
ThumbMediaId 视频消息缩略图的媒体id，可以调用多媒体文件下载接口拉取数据。

    
* 事件

> MsgType event
Event 事件类型 （如：subscribe(订阅)、unsubscribe(取消订阅) ...， CLICK 等）

        
* 扫描带参数二维码事件

> EventKey 事件KEY值，比如：qrscene_123123，qrscene_为前缀，后面为二维码的参数值
Ticket 二维码的 ticket，可用来换取二维码图片    

    
* 地理位置

> Latitude 23.137466 地理位置纬度
Longitude 113.352425 地理位置经度
Precision 119.385040 地理位置精度


* 自定义菜单事件

> EventKey 事件KEY值，与自定义菜单接口中KEY值对应，如：CUSTOM_KEY_001, www.qq.com


* 地理位置

> MsgType location
Location_X 地理位置纬度
Location_Y 地理位置经度
Scale 地图缩放大小
Label 地理位置信息


* 链接

> MsgType link
Title 消息标题
Description 消息描述
Url 消息链接


##### 消息类型
* 文本消息

```java
content 回复的消息内容（换行：在content中能够换行，微信客户端就支持换行显示）

new Text().setContent(String content);
```
    
* 图片消息

```java
MediaId 通过素材管理中的接口上传多媒体文件，得到的id

new Image().setMediaId(String MediaId);
```
* 语音消息

```java
MediaId 通过素材管理中的接口上传多媒体文件，得到的id

new Voice().setMediaId(String MediaId);
```
* 视频消息

```java
MediaId 通过素材管理中的接口上传多媒体文件，得到的id
Title  视频消息的标题
Description  视频消息的描述

new Video().setMediaId(String MediaId);        
new Video().setVideo(String MediaId, String Title);        
new Video().setVideo(String MediaId, String Title, String Description);        
```

* 音乐消息

```java
ThumbMediaId 缩略图的媒体id，通过素材管理中的接口上传多媒体文件，得到的id
Title 音乐标题
Description 音乐描述
MusicURL 音乐链接
HQMusicUrl 高质量音乐链接，WIFI环境优先使用该链接播放音乐

new Music().setMediaId(String ThumbMediaId);
new Music().setMediaId(String ThumbMediaId, String Title);
new Music().setMediaId(String ThumbMediaId, String Title, String Description);
new Music().setMediaId(String ThumbMediaId, String Title, String Description, String MusicURL);
new Music().setMediaId(String ThumbMediaId, String Title, String Description, String MusicURL, String HQMusicUrl);
```

* 图文消息

```java
//注：当用户发送文本、图片、视频、图文、地理位置这五种消息时，开只能回复1条图文消息；其余场景最多可回复8条图文消息

Title 图文消息标题
Description 图文消息描述
PicUrl 图片链接，支持JPG、PNG格式，较好的效果为大图360*200，小图200*200
Url 点击图文消息跳转链接

Map<String, Object> newsItem = new HashMap<String, Object>();
    newsItem.put("Title","Title1");
    newsItem.put("Description","Description1");
    newsItem.put("PicUrl","PicUrl1");
    newsItem.put("Url","Url1");
Map<String, Object> newsItem1=new HashMap<String, Object>();
    newsItem1.put("Title","Title2");
    newsItem1.put("Description","Description2");
    newsItem1.put("PicUrl","PicUrl2");
    newsItem1.put("Url","Url2");
ArrayList<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
    list.add(newsItem);
    list.add(newsItem1);
new News().set(ArrayList<Map<String, Object>> list);

Map<String, Object> Item = new HashMap<String, Object>();
    Item.put("Title","Title");
    Item.put("Description","Description");
    Item.put("PicUrl","PicUrl");
    Item.put("Url","Url");
new News().set(Map<String, Object> Item);
```
