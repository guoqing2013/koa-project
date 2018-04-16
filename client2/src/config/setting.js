// http://yasiapp.sysstudio.com

export const app = {
    //url: "http://api.sysstudio.com",
    //resourceUrl: "http://api.sysstudio.com/api/cms/addcomment",
     url: "http://localhost:5000",
     resourceUrl: "http://api.languagedu.cn/api/cms/addcomment",
    wechatAppid: "wx2d99c08880285503",
    wechatAppSecret: "698e147f9fec3e4d5f1c74294bc2cd89",
    accountid: "HEDV35FASG-DGW423A-34TGGW53AAD66",
    appid: '111',
    appsecret: '123',
    //indexUrl: "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2d99c08880285503&redirect_uri=http%3A%2F%2Fyasiapp.sysstudio.com&response_type=code&scope=snsapi_base#wechat_redirect",
    indexUrl: "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2d99c08880285503&redirect_uri=http%3A%2F%2Fwebapp.languagedu.cn&response_type=code&scope=snsapi_base#wechat_redirect",
  }
  
  // https://api.weixin.qq.com/sns/oauth2/access_token?appid='.$appid.'&secret='.$secret.'&code='.$code.'&grant_type=authorization_code
  
  
  
  
  export const urls = {
    REGISTER_URL: app.url + '/api/register',
  }