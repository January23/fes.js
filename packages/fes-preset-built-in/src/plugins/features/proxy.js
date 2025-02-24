
export default (api) => {
    api.describe({
        key: 'proxy',
        config: {
            onChange: () => {
                const server = api.getServer();
                if (server) {
                    // refrest proxy service
                    server.setupProxy(api.config.proxy, true);
                }
            },
            schema(joi) {
                return joi.object();
            }
        }
    });
};
