
#### 标签管理
##### 创建标签
```java
/**
 * 创建标签
 * 
 * @param name 标签名称
 * @return
 * @throws Exception
 */
officialAccount.tags.create(String name);
```
##### 修改标签
```java
/**
 * 修改标签
 * 
 * @param id   标签id
 * @param name 标签名称
 * @return
 * @throws Exception
 */
officialAccount.tags.update(int id, String name);
```
##### 删除标签
```java
/**
 * 删除标签
 * 
 * @param id 标签id
 * @return
 * @throws Exception
 */
officialAccount.tags.delete(int id);
```
##### 获取标签
```java
/**
 * 获取标签
 * 
 * @return
 * @throws Exception
 */
officialAccount.tags.get();
```
##### 获取标签下粉丝列表
```java
/**
 * 获取标签下粉丝列表
 * 
 * @param tagid 标签ID
 * @param next_openid 下一个用户openid
 * @return
 * @throws Exception
 */
officialAccount.user.gettag(int tagid);
officialAccount.user.gettag(int tagid,String next_openid)
```
##### 批量为用户打标签
```java
/**
 * 批量为用户打标签
 * @param tagid 标签id
 * @param openid_list 用户列表
 * @return
 * @throws Exception
 */
officialAccount.tags.members_batchtagging(int tagid, JSONArray openid_list);
officialAccount.tags.members_batchtagging(int tagid, ArrayList<String> list);
```
##### 批量为用户取消标签
```java
/**
 * 批量为用户取消标签
 * @param tagid 标签id
 * @param openid_list  用户列表
 * @return
 * @throws Exception
 */
officialAccount.tags.members_batchuntagging(int tagid, JSONArray openid_list);
officialAccount.tags.members_batchuntagging(int tagid, ArrayList<String> list);
```
##### 获取用户身上的标签列表
```java
/**
 * 获取用户身上的标签列表
 * @param openid 用户openid
 * @return
 * @throws Exception
 */
officialAccount.tags.getidlist(String openid);
