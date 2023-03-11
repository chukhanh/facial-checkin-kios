import loadable from '@loadable/component';

const OnSuccessLazy = loadable(() => import('./component'));

export default OnSuccessLazy;
