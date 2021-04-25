const getCurrentPath = (location) =>
  location.pathname.replace(/^\/|\/$/g, '') === '' ? 'home' : location.pathname.replace(/^\/|\/$/g, '');

export default getCurrentPath;
