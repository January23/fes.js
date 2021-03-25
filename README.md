<p align="center">
  <a href="https://github.com/WeBankFinTech/fes.js">
    <img alt="fes.js" width="250" src="https://i.loli.net/2021/03/12/Vb4LKc5gaHUfOwB.png">
  </a>
</p>

<div align="center">

一个优秀的前端解决方案

[![GitHub issues](https://img.shields.io/github/issues/WeBankFinTech/fes.js.svg?style=flat-square)](https://github.com/WeBankFinTech/fes.js/issues)
[![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/WeBankFinTech/fes.js/pulls)

</div>

- 使用文档 - [https://winixt.gitee.io/fesjs/zh/](https://winixt.gitee.io/fesjs/zh/)
- 更新日志 - [https://github.com/WeBankFinTech/fes.js/blob/master/CHANGELOG.md](https://github.com/WeBankFinTech/fes.js/blob/master/CHANGELOG.md)

# 痛点
在开发一个前端项目之前，我们可能需要做如下准备工作：
- 搭建开发环境
- 约定代码规范
- 封装API请求
- 配置路由
- 实现布局、菜单、导航
- 实现登录
- 权限管理
- ...

除了准备工作之外，还会遇到很多相似的业务类型，比如中后台应用大多都是工作台、增删改查、权限、图表等。如果每次项目都完全手动处理一遍，不仅耗费时间，久而久之可能会存在多种技术栈、开发规范，导致开发流程不统一，历史项目越来越难维护。所以我们需要一套完整的解决方案，管理开发到部署整个流程。


## Fes.js 是什么？
Fes.js 是一个好用的前端应用解决方案。Fes.js 以 Vue 3.0 和路由为基础，同时支持配置式路由和约定式路由，并以此进行功能扩展。配以覆盖编译时和运行时生命周期完善的插件体系，支持各种功能扩展和业务需求。     

它主要具备以下功能：
- 🚀  __快速__ ，内置了路由、开发、构建等，并且提供测试、布局、权限、国际化、状态管理、API请求、数据字典、SvgIcon等插件，可以满足大部分日常开发需求。  
  
- 🧨  __简单__ ，基于Vue.js 3.0，上手简单。贯彻“约定优于配置”思想，设计插件上尽可能用约定替代配置，同时提供统一的插件配置入口，简单简洁又不失灵活。提供一致性的API入口，一致化的体验，学习起来更轻松。

- 💪  __健壮__ ，只需要关心页面内容，减少写BUG的机会！提供单元测试、覆盖测试能力保障项目质量。

- 📦  __可扩展__ ，借鉴Umi实现了完整的生命周期和插件化机制，插件可以管理项目的编译时和运行时，能力均可以通过插件封装进来，在 Fes.js 中协调有序的运行。

- 📡  __面向未来__ ，在满足需求的同时，我们也不会停止对新技术的探索。已使用Vue3.0来提升应用性能，已使用webpack5提升构建性能和实现微服务，未来会探索vite等新技术。

## 插件

- @fesjs/plugin-access  提供对页面资源的权限控制能力
- @fesjs/plugin-enums   数据字典
- @fesjs/plugin-icon    `svg` 文件自动注册为组件
- @fesjs/plugin-jest    基于 `Jest`，提供单元测试、覆盖测试能力
- @fesjs/plugin-layout  简单的配置即可拥有布局，包括导航以及侧边栏
- @fesjs/plugin-locale  基于 `Vue I18n`，提供国际化能力
- @fesjs/plugin-model   简单的状态管理
- @fesjs/plugin-qiankun 基于 `qiankun`，提供微服务能力
- @fesjs/plugin-request 提供 `api` 请求能力
- @fesjs/plugin-vuex    基于 `Vuex`, 提供状态管理台能力

## 像数 1, 2, 3 一样容易
使用 `yarn`：
```bash
# 创建模板
yarn create @fesjs/fes-app myapp

# 安装依赖
yarn 

# 运行
yarn dev
```

使用 `npm`：
```bash
# 创建模板
npx @fesjs/create-fes-app myapp

# 安装依赖
npm install 

# 运行
npm run dev
```

## 反馈

| Github Issue  | 微信群 | Fes.js开源运营小助手 |
| --- | --- | --- |
| [@fesjs/fes.js/issues](https://github.com/WeBankFinTech/fes.js/issues) | <img src="https://i.loli.net/2020/09/11/2XhKtPZd6NFVbDE.png" width="250" /> | <img src="https://i.loli.net/2020/09/16/sxwr62CKhmYOUyV.jpg" height="250"/> |


## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/WeBankFinTech/fes.js/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
