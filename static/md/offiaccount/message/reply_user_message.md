
```java
response.setCharacterEncoding("UTF-8");
response.setHeader("Content-type", "text/html;charset=UTF-8");

try {
    officialAccount.server.push(HttpServletRequest request, HttpServletResponse response, new ServerCallback() {
        @Override
        public String push(Map<String, Object> message, Message reply) {
            try {
                //回复文本消息
                return reply.text(String text);
                return reply.text().setContent(String text);
                return reply.setText(String text);
                //回复图片消息
                return reply.image(String MediaId);
                return reply.image.setMediaId(String MediaId);
                return reply.setImage(String MediaId);
                //回复语音消息
                return reply.voice(String MediaId);
                return reply.voice.setMediaId(String MediaId);
                return reply.setVoice(String MediaId);
                //回复视频消息
                return reply.video(String MediaId);
                return reply.video(String MediaId, String Title);
                return reply.video(String MediaId, String Title, String Description);
                return reply.video.setMediaId(String MediaId);
                return reply.video.setVideo(String MediaId, String Title);
                return reply.video.setVideo(String MediaId, String Title, String Description);
                return reply.setVideo(String MediaId);
                return reply.setVideo(String MediaId, String Title);
                return reply.setVideo(String MediaId, String Title, String Description);
                //回复音乐消息
                return reply.music(String MediaId);
                return reply.music(String MediaId, String Title);
                return reply.music(String MediaId, String Title, String Description);
                return reply.music.setMediaId(String ThumbMediaId);
                return reply.music.setMusic(String ThumbMediaId, String Title);
                return reply.music.setMusic(String ThumbMediaId, String Title, String Description);
                return reply.music.setMusic(String ThumbMediaId, String Title, String Description, String MusicURL);
                return reply.music.setMusic(String ThumbMediaId, String Title, String Description, String MusicURL, String HQMusicUrl);
                return reply.setMusic(String ThumbMediaId);
                return reply.setMusic(String ThumbMediaId, String Title);
                return reply.setMusic(String ThumbMediaId, String Title, String Description);
                return reply.setMusic(String ThumbMediaId, String Title, String Description, String MusicURL);
                return reply.setMusic(String ThumbMediaId, String Title, String Description, String MusicURL, String HQMusicUrl);
                //回复图文消息
                Map<String, Object> newsItem=new HashMap<String, Object>();
                newsItem.put("Title","Title1");
                newsItem.put("Description","Description1");
                newsItem.put("PicUrl","PicUrl1");
                newsItem.put("Url","Url1");
                Map<String, Object> newsItems=new HashMap<String, Object>();
                newsItems.put("Title","Title2");
                newsItems.put("Description","Description2");
                newsItems.put("PicUrl","PicUrl2");
                newsItems.put("Url","Url2");
                ArrayList<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
                list.add(newsItem);
                list.add(newsItems);
                return reply.news(list);
            } catch (Exception e) {
                e.printStackTrace();
            }
            return null;
        }
    });
} catch (Exception e) {
    // TODO Auto-generated catch block
    e.printStackTrace();
}
```
