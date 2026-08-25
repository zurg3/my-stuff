const {append_html} = lib;

async function show_system_info() {
  const ua = navigator.userAgent;
  const is_chrome = ua.includes('Chrome');
  const is_firefox = ua.includes('Firefox');

  const uad = navigator.userAgentData ? await navigator.userAgentData.getHighEntropyValues([
    'architecture',
    'bitness',
    'fullVersionList',
    'mobile',
    'model',
    'platform',
    'platformVersion'
  ]) : null;

  const items = [];

  if (uad) {
    const brands = uad.fullVersionList.filter(b => !['Not', 'A', 'Brand'].every(w => b.brand.includes(w))).map(b => `${b.brand} ${b.version}`).join('/');
    const bitness = uad.bitness ? ` ${uad.bitness}-bit` : '';

    items.push(
      `<li><b>Browser version</b>: ${brands}</li>`,
      `<li><b>Browser version (old)</b>: ${ua}</li>`,
      `<li><b>OS</b>: ${uad.platform} ${uad.platformVersion}${bitness}</li>`
    );
    if (uad.architecture) items.push(`<li><b>Architecture</b>: ${uad.architecture}</li>`);
    if (uad.model) items.push(`<li><b>Model</b>: ${uad.model}</li>`);
    items.push(`<li><b>Mobile</b>: ${uad.mobile}</li>`);
  }
  else {
    items.push(`<li><b>Browser version</b>: ${ua}</li>`);
  }
  if (is_chrome) items.push(`<li><b>Browser vendor</b>: ${navigator.vendor}</li>`);
  items.push(`<li><b>Platform</b>: ${navigator.platform}</li>`);
  if (is_chrome) items.push(`<li><b>RAM</b>: ${navigator.deviceMemory} GB</li>`);
  if (is_chrome || is_firefox) items.push(`<li><b>CPUs</b>: ${navigator.hardwareConcurrency}</li>`);
  items.push(
    `<li><b>Screen resolution</b>: ${window.screen.width}x${window.screen.height}</li>`,
    `<li><b>Language</b>: ${navigator.language}</li>`,
    `<li><b>Cookie enabled</b>: ${navigator.cookieEnabled}</li>`,
    `<li><b>Java enabled</b>: ${navigator.javaEnabled()}</li>`,
    `<li><b>Online</b>: ${navigator.onLine}</li>`
  );

  append_html(document.body,
    '<h1>System Info</h1>',
    `<ul>${items.join('')}</ul>`
  );
}

show_system_info();
