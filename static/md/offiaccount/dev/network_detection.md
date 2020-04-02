
#### 网络检测

```java
/**
 * 网络检测
 * @param action action 执行的检测动作，允许的值：dns（做域名解析）、ping（做ping检测）、all（dns和ping都做）
 * @return
 * @throws Exception
 */
officialAccount.checkNetwork(String action);
```

```java
/**
 * 网络检测
 * 
 * @param action 执行的检测动作，允许的值：dns（做域名解析）、ping（做ping检测）、all（dns和ping都做）
 * @param operator 指定平台从某个运营商进行检测，允许的值：CHINANET（电信出口）、UNICOM（联通出口）、CAP（腾讯自建出口）、DEFAULT（根据ip来选择运营商）
 * @return
 * @throws Exception
 */
officialAccount.checkNetwork(String action,String operator);
```
> 示例
```java
try {
  officialAccount.checkNetwork("dns");
} catch (Exception e) {
  System.out.println(e.getMessage());
}
```
