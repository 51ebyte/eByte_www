#### 账号迁移openid转换
```java
/**
 * 账号迁移openid转换
 * 
 * @param appid 原帐号的appid
 * @param openid_list 需要转换的openid
 * @return
 * @throws Exception
 */
officialAccount.changeOpenid(String appid,ArrayList<String> openid_list);
```
>示例
```java
ArrayList<String> list=new ArrayList<String>();
list.add("o0nOW04PREpZm9kPI3DW4xyQ3KNU");
officialAccount.changeOpenid("wx5ddb95e1baae0d7f",list);
```
