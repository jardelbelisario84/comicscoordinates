if (!window.location.pathname.includes("https://comicscoordinates.vercel.app/")) {
  window.history.replaceState(
    '',
    '',
    "https://comicscoordinates.vercel.app/" + window.location.pathname
  );
}