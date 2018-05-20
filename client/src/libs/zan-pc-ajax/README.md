## zan-pc-ajax

用于 PC 端的 `ajax` 请求库, 基于 `Promise` 的 `ajax` 实现，支持browser和node环境，`jsonp` 不支持 node。

**使用时请确保存在全局的`Promise`实现。**推荐 [es6-promise](https://github.com/stefanpenner/es6-promise)

#### 和`zan-ajax`的关系

`zan-ajax` 是通用的包，不包含任何业务相关的处理逻辑(比如对非零 `code` 的处理)，`zan-pc-ajax` 是在 `zan-ajax` 基础上加上了 PC 端的业务逻辑。

PC 端都应该使用这个库来发请求。

### 代码演示

```js
import ajax from 'zan-pc-ajax';

// get
ajax({
	url: 'http://youzan.com/some.json',
	data: {
		quux: 2
	}
}).then(data => {

}).catch(msg => {

});

// post
ajax({
	url: 'http://youzan.com/some.json',
	method: 'POST',
	data: {
		foobar: 1
	}
});

// 通过 rawResponse 获取请求的原始数据
ajax({
	url: 'http://youzan.com/some.json',
	data: {
		quux: 2
	},
	rawResponse: true
}).then(resp => {
	const { code, data } = resp;
}).catch(resp => {
	const { code, msg } = resp;
});

// jsonp
ajax({
	url: 'http://youzan.com/some.jsonp',
	dataType: 'jsonp',
	data: {
		foobar: 2
	}
});

// Node 端假如需要处理一些 Java 的长整数类型的 JSON 字段，可以使用 allowBigNumberInJSON 将这些数字存储为字符串
ajax({
	url: 'http://youzan.com/some-java-api-with-long-long-in-json',
	allowBigNumberInJSON: true
});

```

### API

函数原型 `ajax(ajaxOptions): Promise`

`ajaxOptions` 是请求的参数。返回值是一个 `Promise`，请求成功会 `resolve`，请求失败会 `reject`。

#### `ajax`

| 参数            | 说明               | 类型             | 默认值    |   备选值   | 是否必填   |
|------           |------              |------            |--------    |-------- |--------|
| url | 请求的地址 | string | | | 是 |
| method | 请求的类型 | string | `GET` | `GET` \| `HEAD` \| `POST` \| `DELETE` \| `PUT` \| `PATCH` | 否 |
| data | 请求的参数，`GET` / `HEAD`类请求会作为URL参数，`POST` \| `PUT`等请求会作为`body` | object | | | 否 |
| contentType | 发送给服务器的数据类型 | string | `POST` \| `PUT` \| `DELETE` \| `PATCH` 请求默认值为 `'application/x-www-form-urlencoded; charset=UTF-8'` | | 否 |
| dataType | 请求的返回值类型 | string | 'json' | `jsonp` \| `arraybuffer` \| `blob` \| `document` \| `json` \| `text` \| `stream` | 否 |
| headers | HTTP请求的头 | object | `{ 'X-Requested-With': 'XMLHttpRequest' }` | | 否 |
| noXRequestedWithHeader | 是否强制加上`X-Requested-With`这个头，这个头会触发CORS preflight，默认为 `true`, 不带这个头，设为 `false` 的话会强制加上这个头 | bool | true | true \| false | 否 |
| withCredentials | indicates whether or not cross-site Access-Control requests should be made using credentials | bool | false | false \| true | 否 |
| username | HTTP请求的用户名 | string | | | 否 |
| password | HTTP请求的密码 | string | | | 否 |
| timeout | 请求的超时时间，`0`表示没有超时 | number | 10000 | | 否 |
| onUploadProgress | 上传请求的进度回调函数，参数是 progressEvent | func | | | 否 |
| onDownloadProgress | 下载请求的进度回调函数，参数是 progressEvent | func | | | 否 |
| cancelToken | 用来取消请求的token，具体请看下面的取消请求文档 | CancelToken | | | 否 |
| rawResponse | 如果为`true`的话，`resolve`和`reject`的参数会是服务器返回的原始数据 | bool | false | true \| false | 否 |
| allowBigNumberInJSON | 如果为 `true` 的话，使用 `zan-json-parse` 来解析 JSON，这个 parser 会把一些浮点数无法表示的数字存储为字符串。一般在 node 后端项目里需要用到这个。 | bool | `false` | `true` \| `false` | 否 |


#### `jsonp`

`dataType` 是 `jsonp` 的时候这些参数有效。

| 参数            | 说明               | 类型             | 默认值    |   备选值   | 是否必填   |
|------           |------              |------            |--------    |-------- |--------|
| url | 请求的地址 | string | | | 是 |
| data | 请求的参数，作为 url 参数发送 | object | | | 否 |
| jsonp | `JSONP`请求的回调参数名称, `callback=__jp01`中的`callback`部分 | string | 'callback' | | 否 |
| jsonpCallback | `JSONP`请求的回调函数名，如果是函数则使用函数的返回值，`callback=__jp01`中的`__jp01`部分 | string \| function | 每次请求都生成一个不一样的字符串 | | 否 |
| prefix | `JSONP` 请求回调函数名字的前缀，`callback=__jp01`中的`__jp`部分，后面的部分会用随机字符串填充 | string | '__jp' | 否 |
| timeout | 请求的超时时间，`0`表示没有超时 | number | 10000 | | 否 |
| cache | 浏览器缓存策略，设置为`false`，会强制浏览器不缓存请求 | bool | false | true \| false | 否 |
| rawResponse | 如果为`true`的话，`resolve`和`reject`的参数会是服务器返回的原始数据 | bool | false | true \| false | 否 |


#### rawResponse 的说明

```js
// 对于下面这个请求返回值
// rawResponse为true，resolve/reject拿到的是后端返回的原始数据
// rawResponse为false, resolve拿到的是data字段下的值；reject拿到的是msg下的值
{
  "code": 0,
  "msg": "",
  "data": {
    "id": "63077",
    "shop_id": "63077",
    "team_name": "\u8d77.\u7801\u8fd0\u52a8\u9986a",
  }
}
```

#### 取消请求

使用 `ajax` 上的 `CancelToken` 创建 token，有两种使用方式。

> 不同的请求可以使用同一个token，调用这个 token 的 `cancel` 方法时会同时取消所有使用这个 token 的请求。

jsonp 请求不支持取消操作。

```js
var CancelToken = ajax.CancelToken;
var source = CancelToken.source();

ajax({
  url: ''/user/12345',
  cancelToken: source.token
}).catch(function(thrown) {
  if (ajax.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // handle error
  }
});

// cancel the request (the message parameter is optional)
source.cancel('Operation canceled by the user.');
```

```js
var CancelToken = ajax.CancelToken;
var cancel;

ajax({
  url: '/user/12345',
  cancelToken: new CancelToken(function executor(c) {
    // An executor function receives a cancel function as a parameter
    cancel = c;
  })
});

// cancel the request
cancel();
```

#### URL参数序列化

内部使用的序列化函数等价于 `jQuery.param(value, false)`
