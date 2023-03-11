import loadable from '@loadable/component';

const LoginScreenLazy = loadable(() => import('./component'));

export default LoginScreenLazy;
