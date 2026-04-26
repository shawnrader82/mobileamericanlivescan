async function injectPartial(selector, path) {
  const target = document.querySelector(selector);
  if (!target) return;
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Failed to load ${path}`);
  target.innerHTML = await response.text();
}

(async function () {
  try {
    await injectPartial('[data-include-header]', './partials/header.html');
    await injectPartial('[data-include-footer]', './partials/footer.html');
    const script = document.createElement('script');
    script.src = './assets/js/main.js';
    script.defer = true;
    document.body.appendChild(script);
  } catch (error) {
    console.error(error);
  }
}());
