#### 清理接口调用次数
```java
/**
* 清理接口调用次数,此接口官方有每月调用限制，不可随意调用
* 
* @return
* @throws Exception
*/
officialAccount.clearQuota();
```

> 示例

```java
try {
  officialAccount.clearQuota();
} catch (Exception e) {
  e.printStackTrace();
  System.err.println(e.getMessage());
}
```
