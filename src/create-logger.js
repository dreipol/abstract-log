/**
 * Just a noop
 */
function noop() {
    // NOTE: Intentionally do nothing
}

/**
 * Define loggers for vue instances
 * @param {Object} target - The host object
 * @param {Object} config - A config object for the logger instance
 * @param {Object} instance - A vue component instance that is allowed to influence part of the logging string
 * @return {Function} The original target object enhanced with a logger instance
 */
export function createLogger(target, config, instance) {
    const { context, filter, levels, logger, middlewares, proxy } = config;

    return levels.reduce((host, level) => {
        return Object.defineProperty(host, level.name, {
            get() {
                if (!level.fn || !filter({ config, level, instance })) {
                    return noop;
                }

                if (proxy) {
                    const args = middlewares.reduce((acc, m) => m({ level, config, instance }), []);
                    return level.fn.bind(logger, ...args);
                }

                return function(...statements) {
                    const args = middlewares.reduce((acc, m) => m({ level, config, instance, statements }), []);
                    level.fn.call(logger, ...args);
                };
            },
        });
    }, target);
}
