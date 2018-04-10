import { colorize, iconize, localize } from './middlewares';


export const presets = {
    logger: window.console,
    proxy: true,
    context: {},
    filter: () => true,
    levels: [
        {
            name: 'debug',
            fn: window.console.debug,
            label: '🗒',
            color: 'grey',
        },
        {
            name: 'log',
            fn: window.console.log,
            label: '📎',
            color: 'grey',
        },
        {
            name: 'info',
            fn: window.console.info,
            label: '💎️',
            color: '#6060BA',
        },
        {
            name: 'warn',
            fn: window.console.warn,
            label: '',
            color: '#817123',
        },
        {
            name: 'error',
            fn: window.console.error,
            label: '',
            color: '#A16666',
        },
    ],
    middlewares: [localize, iconize, colorize],
};
