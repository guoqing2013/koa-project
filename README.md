# koa-react-project

`koa-react-project` 使用了`react`、`react-router`、`koa`和`mysql`等框架和技术。前后端分离,restful架构。项目主要包含两个个文件夹和项目：后期会再增加admin管理项目

- server 后台
- client 前端




## server

基于(Koa Boilerplate)[https://github.com/jeffijoe/koa-es7-boilerplate]搭建的项目。

目前还是使用纯koa做后台，后期会用(zan-node)[https://github.com/youzan/zan-node]进行改写

### 技术栈
koa2 + jsonwebtoken + mysql + sequelize

<!--
基于restful，nodejs的话采用koa框架(koa 1)，数据库用了mongo。登录这块的话用了[jwt](https://jwt.io/introduction/).

生产环境下可在可在server/configs目录下增加private.js文件,增加私有配置.

**因为使用了许多es6/7 新语法,所以请使用6.x版本node**
-->

### npm command

```
# install dependencies
npm install

# 开发
# 开发,跑在本地5000端口
npm run dev

# 部署
npm run build


```

## client

基于(create-react-app)[https://github.com/facebook/create-react-app]搭建的项目


### 技术栈
react + react-router + axios + webpack + ES6/7 + pcss + zent

### yarn command

```
# install dependencies
yarn install

# 开发,跑在本地3000端口
yarn start

# 打包
yarn build

```

