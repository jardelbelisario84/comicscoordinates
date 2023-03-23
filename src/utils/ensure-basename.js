if (!window.location.pathname.includes(document.baseURI.substring(document.baseURI.indexOf(window.location.origin) + window.location.origin.length, document.baseURI.lastIndexOf('/')))) {
  window.history.replaceState(
    '',
    '',
    document.baseURI.substring(document.baseURI.indexOf(window.location.origin) + window.location.origin.length, document.baseURI.lastIndexOf('/')) + window.location.pathname
  );
}