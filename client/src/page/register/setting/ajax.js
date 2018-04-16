import axios from 'axios'
// import { app, urls } from './setting'

axios.defaults.timeout = 5000;                        // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'           // 配置请求头
// axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';           // 配置请求头
// axios.defaults.baseURL = '你的接口地址'   // 配置接口地址

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use( (config) =>{
    //每次发送请求之前检测都vuex存有token,那么都要放在请求头发送给服务器
    // if(sessionStorage.get('token')){
    //     config.headers.Authorization = `token ${sessionStorage.get('token')}`;
    // }
    // config.headers = {
    //     'Content-Type':'application/json;charset=UTF-8'
    // }
    return config;
}, (error) => {
    return Promise.reject(error);
})


// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use( (response) =>{
// 对响应数据做些事
//   if(!res.data.success){
//     // _.toast(res.data.msg);
//     return Promise.reject(res);
//   }

    return response.data
}, (error) =>{
    return Promise.reject(error);
    // if(error.response){
    //     switch(error.response.status){
    //         case 401:
    //             // store.dispatch('UserLogout'); //可能是token过期，清除它
    //             // router.replace({ //跳转到登录页面
    //             //     path: 'login',
    //             //     query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
    //             // });
    //     }
    // }
    // return Promise.reject(error.response);
});

