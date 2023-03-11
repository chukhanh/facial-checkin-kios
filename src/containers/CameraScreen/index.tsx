import loadable from '@loadable/component';

const CameraScreenLazy = loadable(() => import('./component'));

export default CameraScreenLazy;
