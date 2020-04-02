
#### 二维码
##### 创建临时二维码
```java
/**
 * @param scene_id 二维码详细信息（场景值ID,32位非0整型）
 * @param scene_str 二维码详细信息（场景值ID,字符串形式的ID，长度限制为1到64）
 * @param expire    二维码有效期
 * @param type      输出参数（可选值：url|ticket|image）
 */
officialAccount.qrcode.temporary(int scene_id, int expire);
officialAccount.qrcode.temporary(int scene_id, int expire, String type);
officialAccount.qrcode.temporary(String scene_str, int expire);
officialAccount.qrcode.temporary(String scene_str, int expire, String type);
```
##### 创建永久二维码
```java
/**
 * @param scene_id 二维码详细信息（场景值ID,32位非0整型）
 * @param scene_str 二维码详细信息（场景值ID,字符串形式的ID，长度限制为1到64）
 * @param type      输出参数（可选值：url|ticket|image）
 */
officialAccount.qrcode.forever(int scene_id);
officialAccount.qrcode.forever(int scene_id, String type);
officialAccount.qrcode.forever(String scene_str);
officialAccount.qrcode.forever(String scene_str, String type);
```