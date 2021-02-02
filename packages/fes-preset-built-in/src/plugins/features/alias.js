import { dirname } from 'path';
import { winPath, resolve } from '@umijs/utils';

export default (api) => {
    const { paths, pkg, cwd } = api;

    api.describe({
        key: 'alias',
        config: {
            schema(joi) {
                return joi.object();
            },
            default: {
            }
        }
    });

    function getUserLibDir({ library }) {
        if (
            (pkg.dependencies && pkg.dependencies[library])
      || (pkg.devDependencies && pkg.devDependencies[library])
      // egg project using `clientDependencies` in ali tnpm
      || (pkg.clientDependencies && pkg.clientDependencies[library])
        ) {
            return winPath(
                dirname(
                    // 通过 resolve 往上找，可支持 lerna 仓库
                    // lerna 仓库如果用 yarn workspace 的依赖不一定在 node_modules，可能被提到根目录，并且没有 link
                    resolve.sync(`${library}/package.json`, {
                        basedir: cwd
                    })
                )
            );
        }
        return null;
    }

    // 另一种实现方式:
    // 提供 projectFirstLibraries 的配置方式，但是不通用，先放插件层实现
    api.chainWebpack(async (memo) => {
        const libraries = await api.applyPlugins({
            key: 'addProjectFirstLibraries',
            type: api.ApplyPluginsType.add,
            initialValue: [
                {
                    name: 'vue'
                }
            ]
        });
        libraries.forEach((library) => {
            memo.resolve.alias.set(
                library.name,
                getUserLibDir({ library: library.name }) || library.path
            );
        });

        // 选择在 chainWebpack 中进行以上 alias 的初始化，是为了支持用户使用 modifyPaths API 对 paths 进行改写
        memo.resolve.alias.set('@', paths.absSrcPath);
        memo.resolve.alias.set('@@', paths.absTmpPath);

        Object.keys(api.config.alias).forEach((key) => {
            memo.resolve.alias.set(key, api.config.alias[key]);
        });

        return memo;
    });
};
