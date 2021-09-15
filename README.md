# vue_test
本项目是自己学习记录使用.
[toc]

---
## 项目初始化
### 1.安装cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org  
查看是否安装成功：cnpm -v 

### 2.通过 cnpm 使用 vue-cli
sudo cnpm install vue-cli -g  
查看是否安装成功：vue list 

### 3.通过webpack创建vue项目
vue init webpack zw-vue-project

### 4.进入项目中启动项目
cd zw-vue-project  
cnpm install
cnpm run dev

### 5.浏览器中查看创建的项目
http://localhost:8080

-----
## 插件的安装
#### 安装vue-router
cnpm install vue-router

#### Chrome安装vue-devtools
[vue-devtools] [https://github.com/zhangwen0424/vue-test/blob/master/vue-devtools.crx]
下载文件拖到Chrome开发者工具中

#### vscode中安装插件
Vetur  格式化代码、高亮、代码格式检测、自带Emment、括号自动补全  
ivue   语法提示高亮


---
## 项目记录

[webpack 官方文档](https://webpack.docschina.org/api/)
package.json  
```
webpack-dev-server --inline --progress --config build/webpack.dev.conf.js
/*
  webpack-dev-server: 启用web服务器实时加载热更新项目
*/ 
```

---- src: 
  |---- api: 请求接口
  |---- assets: 静态文件（图片和css）
    |---- images: 图片
    |---- style: css
  |---- components: 公共组件
  |---- entry: 入口js
  |---- i18n: 国际化语言
  |---- store: 数据存储（用户信息、当前语言、公司、部门等）
     |---- loginUser: 登陆用户
     |---- lang: 语言
  |---- router: 页面路由
  |---- utils: 自定义函数
  |---- views: 页面组件
---- build: 构建脚本相关配置
---- config: 环境和其它一些相关配置
---- template: html模板
