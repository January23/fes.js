# @fesjs/plugin-request

基于 axios 封装的 request，内置防止重复请求、请求节流、错误处理等功能。
## 启用方式

在 `package.json` 中引入依赖：
```json
{
    "dependencies": {
        "@fesjs/fes": "^2.0.0",
        "@fesjs/plugin-request": "^2.0.0"
    },
}
```
## 配置

### 构建时配置

```js
export default {
    request: {
        dataField: 'result',
        base: '',
    },
}
```

#### dataField

- 类型： `string`
- 默认值： `''`
- 详情：

    `dataField` 对应接口统一格式中的数据字段，比如接口如果统一的规范是 `{ success: boolean, result: any}` ，那么就不需要配置，这样你通过 `useRequest` 消费的时候会生成一个默认的 `formatResult`，直接返回 `result` 中的数据，方便使用。如果你的后端接口不符合这个规范，可以自行配置 `dataField`。配置为 `''`（空字符串）的时候不做处理。


#### base

- 类型： `string`
- 默认值： `''`
- 详情：

    `base` 接口前缀。 
### 运行时配置

在 `app.js` 中进行运行时配置。
 
```js
export const request = {
    // 格式化 response.data (只有 response.data 类型为 object 才会调用)
    responseDataAdaptor: (data) => {

    },
    // 请求拦截器
    requestInterceptors: [],
    // 相应拦截器
    responseInterceptors: [],
    // 错误处理
    // 内部以 reponse.data.code === '0' 判断请求是否成功
    // 若使用其他字段判断，可以使用 responseDataAdaptor 对响应数据进行格式
    errorHandler: {
        11199: (response) => {

        },
        404: (error) => {

        }
    },
    // 其他 axios 配置
    ...otherConfigs
}
```
## 使用

### 发起一个普通 post 请求

```js
import {request} from '@fesjs/fes';

request('/api/login', {
    username: 'robby',
    password: '123456'
}).then((res) => {
    // do something
}).catch((err) => {
    // 处理异常
})
```

### 请求节流

```js
import {request} from '@fesjs/fes';

request('/api/login', {
    username: 'robby',
    password: '123456'
}, {
    throttle: 1000, // 1 秒内只能发起一次请求
}).then((res) => {
    // do something
}).catch((err) => {
    // 处理异常
})
```

### 请求缓存

```js
import {request} from '@fesjs/fes';

request('/api/login', {
    username: 'robby',
    password: '123456'
}, {
    cache: {
        cacheType: 'ram', // ram: 内存，session: sessionStorage，local：localStorage
        cacheTime: 1000 * 60 * 3 // 缓存时间，默认3min
    },
}).then((res) => {
    // do something
}).catch((err) => {
    // 处理异常
})
```

若 `cache` 传 `true`，则默认使用 `ram` 缓存类型，缓存时间 3min。

### 结合 use 使用

```js
import {useRequest} from '@fesjs/fes';


export default {
    setup() {
        const {loading, data, error} = useRequest('/api/login', {
            username: 'robby',
            password: '123456'
        })

        return {
            loading,
            data,
            error
        }
    }
}
```

## API

### request

- **类型**：函数

- **详情**：请求后端接口
- **参数**：
  - url: 后端接口 url
  - data: 参数
  - options: 配置（ 支持 axios 所有配置）
- **返回值**: Promise

### useRequest

request 的封装，返回响应式 `loading`、`error`、 `data`
