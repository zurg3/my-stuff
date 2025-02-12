async function print_system_info() {
  let user_agent;
  if (navigator.userAgentData) {
    user_agent = await navigator.userAgentData.getHighEntropyValues([
      'architecture',
      'bitness',
      'fullVersionList',
      'mobile',
      'model',
      'platform',
      'platformVersion'
    ]);
  }

  document.body.innerHTML += `<h1>System Info</h1><ul></ul>`;

  const ul = document.getElementsByTagName('ul')[0];

  if (navigator.userAgentData) {
    ul.innerHTML += `<li><b>Browser version</b>: ${user_agent.fullVersionList[0].brand} ${user_agent.fullVersionList[0].version}/${user_agent.fullVersionList[1].brand} ${user_agent.fullVersionList[1].version}/${user_agent.fullVersionList[2].brand} ${user_agent.fullVersionList[2].version}</li>`;
    ul.innerHTML += `<li><b>Browser version (old)</b>: ${navigator.userAgent}</li>`;
  }
  else {
    ul.innerHTML += `<li><b>Browser version</b>: ${navigator.userAgent}</li>`;
  }
  if (navigator.userAgentData) {
    if (user_agent.bitness) {
      ul.innerHTML += `<li><b>OS</b>: ${user_agent.platform} ${user_agent.platformVersion} ${user_agent.bitness}-bit</li>`;
    }
    else {
      ul.innerHTML += `<li><b>OS</b>: ${user_agent.platform} ${user_agent.platformVersion}</li>`;
    }
  }
  if (navigator.userAgentData && user_agent.architecture) ul.innerHTML += `<li><b>Architecture</b>: ${user_agent.architecture}</li>`;
  if (navigator.userAgentData && user_agent.model) ul.innerHTML += `<li><b>Model</b>: ${user_agent.model}</li>`;
  if (navigator.userAgentData) ul.innerHTML += `<li><b>Mobile</b>: ${user_agent.mobile}</li>`;
  if (navigator.userAgent.search('Chrome') !== -1) ul.innerHTML += `<li><b>Browser vendor</b>: ${navigator.vendor}</li>`;
  ul.innerHTML += `<li><b>Platform</b>: ${navigator.platform}</li>`;
  if (navigator.userAgent.search('Chrome') !== -1) ul.innerHTML += `<li><b>RAM</b>: ${navigator.deviceMemory} GB</li>`;
  if (navigator.userAgent.search('Chrome') !== -1 || navigator.userAgent.search('Firefox') !== -1) ul.innerHTML += `<li><b>CPUs</b>: ${navigator.hardwareConcurrency}</li>`;
  ul.innerHTML += `<li><b>Screen resolution</b>: ${window.screen.width}x${window.screen.height}</li>`;
  ul.innerHTML += `<li><b>Language</b>: ${navigator.language}</li>`;
  ul.innerHTML += `<li><b>Cookie enabled</b>: ${navigator.cookieEnabled}</li>`;
  ul.innerHTML += `<li><b>Java enabled</b>: ${navigator.javaEnabled()}</li>`;
  ul.innerHTML += `<li><b>Online</b>: ${navigator.onLine}</li>`;
}

print_system_info();
