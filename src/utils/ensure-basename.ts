if (!window.location.pathname.includes("/")) {
  window.history.replaceState(
    '',
    '',
    "/" + window.location.pathname
  );
}