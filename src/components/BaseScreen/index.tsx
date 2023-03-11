import loadable from '@loadable/component';

const BaseScreenLazy = loadable(() => import('./component'));

export default BaseScreenLazy;
