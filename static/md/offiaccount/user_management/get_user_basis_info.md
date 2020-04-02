#### 获取用户信息
##### 获取用户基本信息(UnionID机制)
```java
/**
 * 获取用户基本信息(UnionID机制)
 * 
 * @param openid 用户标识
 * @return
 * @throws Exception
 */
officialAccount.user.info(String openid)
```
##### 批量获取用户基本信息
```java
/**
 * 批量获取用户基本信息
 * @param openids 用户标识
 * @return
 * @throws Exception
 */
officialAccount.user.infos(ArrayList<String> openids)
```
