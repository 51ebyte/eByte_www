const nav = [{
  name: "started",
  text: '开发前必读',
  children: [{
    name: 'overview',
    text: '概述',
  }, {
    name: 'update',
    text: '更新日志',
  }, {
    name: 'problems',
    text: '常见问题汇总',
  }, {
    name: 'init',
    text: '开始使用',
  }]
}, {
  name: 'dev',
  text: '开始开发',
  children: [{
      name: 'guide',
      text: '接入指南',
    },
    {
      name: 'get_access_token',
      text: '获取Access Token',
    },
    {
      name: 'get_wechat_server_ip_address',
      text: '获取微信服务器IP地址',
    }, {
      name: 'clear_quota',
      text: '清理接口调用次数',
    }, {
      name: 'network_detection',
      text: '网络检测',
    }, {
      name: 'change_openid',
      text: '账号迁移openid转换',
    }
  ]
}, {
  name: 'menu',
  text: '自定义菜单',
  children: [{
      name: 'create',
      text: '创建菜单',
    },
    {
      name: 'query',
      text: '查询菜单',
    }, {
      name: 'delete',
      text: '删除菜单',
    }
  ]
}, {
  name: 'message',
  text: '消息管理',
  children: [{
    name: 'receive_standard',
    text: '接收普通消息',
  }, {
    name: 'receive_event',
    text: '接收事件消息',
  }, {
    name: 'reply_user_message',
    text: '被动回复用户消息',
  }, {
    name: 'service_center_messages',
    text: '客服消息',
  }, {
    name: 'other_instructions',
    text: '其他说明',
  }]
}, {
  name: 'oa_web_apps',
  text: '网页开发授权',
  children: [{
    name: 'webpage_authorization',
    text: '网页授权',
  },
  /*{
    name: 'JS_SDK',
    text: 'JSSDK',
  }*/]
}, /*{
  name: 'asset_management',
  text: '素材管理',
}, {
  name: 'comments_management',
  text: '图文消息留言管理',
},*/ {
  name: 'user_management',
  text: '用户管理',
  children: [{
    name: 'tag_management',
    text: '标签管理',
  }, {
    name: 'user_notes',
    text: '设置用户备注名',
  }, {
    name: 'get_user_basis_info',
    text: '获取用户信息',
  }, {
    name: 'get_user_lists',
    text: '获取用户列表',
  }, {
    name: 'get_user_location',
    text: '获取用户地理位置',
  }, {
    name: 'manage_blacklist',
    text: '黑名单管理',
  }]
}, {
  name: 'accout_management',
  text: '账号管理',
  children: [{
    name: 'qr_code',
    text: '二维码',
  }, {
    name: 'url_shortener',
    text: '短链接',
  }]
}];

export default nav;
