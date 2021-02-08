
export default function (api) {
    api.registerCommand({
        command: 'info',
        description: 'print debugging information about your environment',
        async fn() {
            require('envinfo').run(
                {
                    System: ['OS', 'CPU'],
                    Binaries: ['Node', 'Yarn', 'npm'],
                    Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari'],
                    npmPackages: ['@webank/fes', 'vue', 'vue-router'],
                    npmGlobalPackages: ['@webank/fes']
                },
                {
                    showNotFound: true,
                    duplicates: true,
                    fullTree: true
                }
            )
                .then(console.log);
        }
    });
}
