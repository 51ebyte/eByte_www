import nav from '@/components/doc/nav/weixin/pay.js'
let navBarText = {};
nav.map((item, index) => {
  navBarText[item.name] = item['text'];
  if(item.children){
    item.children.map((c) => {
      navBarText[item.name + '-' + c.name] = c['text'];
      if(c.children){
        c.children.map((d) => {
          navBarText[item.name + '-' + c.name + '-' + d.name] = c['text'];
        })
      }
    })
  }
})
export default navBarText;
