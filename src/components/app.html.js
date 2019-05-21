export default (scope) => `
<link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<style>${scope.css}</style>
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <div class="container">
    <h1 class="navbar-brand">${scope.title}</h1>
    <div class="float-right">
      <small class="text-light">by <a href="https://time2hack.com/" target="_blank">https://time2hack.com</a></small>
    </div>
  </div>
</nav>
<main class="container">
  <div class="app">
    <tc-form></tc-form>
    <tc-feed></tc-feed>
  </div>
</main>
`;
