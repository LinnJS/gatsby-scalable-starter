import windowCheck from './windowCheck';

const isInstalled = windowCheck() && window.matchMedia('(display-mode: standalone)').matches;

export default isInstalled;
