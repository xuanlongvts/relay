import App from './index';
// import RoutersUnAuthen from './RoutersUnAuthen';
import RoutersAuthen from './RoutersAuthen';

const routeConfig = [
    {
        path: '/',
        Component: App,
        children: RoutersAuthen,
    },
];

export default routeConfig;
