// if (
//   !window.location.pathname.includes(
//     document.baseURI.substring(
//       document.baseURI.indexOf(window.location.origin) + window.location.origin.length,
//       document.baseURI.lastIndexOf("/")
//     )
//   )
// ) {
//   window.history.replaceState(
//     "",
//     "",
//     document.baseURI.substring(
//       document.baseURI.indexOf(window.location.origin) + window.location.origin.length,
//       document.baseURI.lastIndexOf("/")
//     ) + window.location.pathname
//   );
// }

(function(l) {
  if (l.search[1] === '/' ) {
    var decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&')
    }).join('?');
    window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
}(window.location))
