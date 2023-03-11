import loadable from '@loadable/component';

const PhoneLazy = loadable(() => import('./component'));

export default PhoneLazy;
