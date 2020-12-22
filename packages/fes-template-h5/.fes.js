// fes.config.js 只负责管理 cli 相关的配置


export default {
    access: {
        roles: {
            admin: ["/"]
        }
    },
    layout: {
        menus: [{
            path: '/'
        }]
    },
    devServer: {
        port: 8080
    }
};
