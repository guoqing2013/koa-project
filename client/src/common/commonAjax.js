import assign from "lodash/assign";
import omit from "lodash/omit";
import omitBy from "lodash/omitBy";
import mapValues from "lodash/mapValues";
import isArray from "lodash/isArray";
import cookie from 'js-cookie';
import ajax from 'zan-pc-ajax';

// 删除对象中为null的属性值
const omitByObject = (obj) => {
    return omitBy(obj, (value) =>{
        return value && value !== ""; 
    });
}
// 将对象中属性值为数组的stringify为字符串
function stringifyAttribute(obj) {
    return mapValues(obj, (value) => {
        if (!isArray(value)) {
            return value
        } else {
            return JSON.stringify(value)
        }
    });
    // return (0,
    // g.default)(t, function(t) {
    //     return (0,
    //     h.default)(t) || (0,
    //     f.default)(t) ? JSON.stringify(t) : t
    // })
}

export default function commonAjax(opts, method, data) {
    
    if (opts.url &&  !opts.url.match(/^\//)) { //不是以"/"开头的请求地址自动加上"/"
        opts.url = "/" + opts.url
    }
    // opts.url = "//carmen.youzan.com/gw/web" + opts.url;
    opts.url = "http://localhost:5000/api/oauthentry" + opts.url;

   
    if (
        // "string" === typeof opts && (data || (data = method, method = "get"),
        //     opts = {
        //         url: opts,
        //         method: method,
        //         data: data
        //     }),
        // opts.url && !opts.url.match(/^\//) && (opts.url = "/" + opts.url),
        // opts.url = "//carmen.youzan.com/gw/web" + opts.url,
        opts.url && -1 !== opts.url.indexOf("youzan.retail")
    ) {
        var options = {
            source: "WEB_BACK_END",
            idempotentNo: Date.now()
        };
        var orderByString = cookie.get("carmen_csrf_token");
        if (orderByString) {
            options.carmenCsrfToken = orderByString;
        }
        opts.data = assign({}, opts.data, options);
    }
    // options = false === opts.needTrim ?opts.data : omitByObject(opts.data || {});
    if(opts.needTrim === false) {
        data = opts.data;
    } else {
        data = omitByObject(opts.data || {}); //删除对象中为null的属性值
    }

    data = stringifyAttribute(data);

    var params = {
        noXRequestedWithHeader: true,
        withCredentials: true,
        url: opts.url,
        method: opts.method || "GET",
        data: data
    };



    // return -1 !== opts.url.indexOf("/youzan.retail.product.biz.online/1.0.0/update") && "" === opts.data.subTitle && (params.data.subTitle = ""), 
    // (0, _custom2.default)(extend({}, params, (0, _AboutPage2.default)(opts, Object.keys(params))));

    return ajax(assign({}, params, omit(opts, Object.keys(params))));
}