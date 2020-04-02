#### 获取微信服务器 IP (或IP段)

```java
/**
 * 获取微信服务器ip地址
 * 
 * @return
 * @throws Exception
 */
officialAccount.getValidIps();
```
> 示例

```java
try {
  Object ip = officialAccount.getValidIps();
  System.out.println(ip);
} catch (Exception e) {
  e.printStackTrace();
  System.err.println(e.getMessage());
}
```
