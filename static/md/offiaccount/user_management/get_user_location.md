
#### 获取用户地理位置
```java
response.setHeader("Content-type", "text/html;charset=UTF-8");
response.setCharacterEncoding("UTF-8");
try {
    officialAccount.server.push(HttpServletRequest request, HttpServletResponse response,new ServerLocationCallback() {
        @Override
        public void push(Map<String, String> message) {
          
        }
    });
} catch (Exception e) {
    e.printStackTrace();
}
```
