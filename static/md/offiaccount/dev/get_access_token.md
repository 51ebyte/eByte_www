#### 获取Access Token

```java
/**
 * 获取access_token
 * 
 * @return
 * @throws Exception
 */
officialAccount.getAccessToken();
```
> 示例

```java
try {
    String accessToken = officialAccount.getAccessToken();
    System.out.println(accessToken);
} catch (Exception e) {
    e.printStackTrace();
}
```
