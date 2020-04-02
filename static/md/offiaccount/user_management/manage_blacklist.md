
#### 黑名单管理
##### 获取黑名单
```java
/**
 * 获取黑名单列表
 * @param begin_openid
 * @return
 * @throws Exception
 */
officialAccount.user.blacklist()
officialAccount.user.blacklist(String begin_openid)
```
##### 拉黑用户
```java
/**
 * 拉黑用户
 * 
 * @param openid_list
 * @return
 * @throws Exception
 */
officialAccount.user.black(ArrayList<String> openid_list);
例：
ArrayList<String> list=new ArrayList<String>();
list.add("o0nOW04PREpZm9kPI3DW4xyQ3KNU");
officialAccount.user.black(list);
```
##### 取消拉黑用户
```java
/**
 * 取消拉黑用户
 * 
 * @param openid_list
 * @return
 * @throws Exception
 */
officialAccount.user.unblack(ArrayList<String> openid_list);
例：
ArrayList<String> list=new ArrayList<String>();
list.add("o0nOW04PREpZm9kPI3DW4xyQ3KNU");
officialAccount.user.unblack(list)
```
