const base_mirror_link = 'https://mirror.yandex.ru';
let download_link = '';

document.write('<h1>Download GNU/Linux ISO images</h1>');
document.write('<h2>from Russian mirror (Yandex)</h2>');
document.write('<br>');

// Debian
document.write('<h3 id="debian">Debian</h3>');
document.write('<ul>');
  download_link = `${base_mirror_link}/debian-cd/current/${debian.arch}/iso-dvd/`;

  document.write(`<li><a href="${download_link}">Debian ${debian.version} "${debian.codename}"</a></li>`);
document.write('</ul>');

document.write('<hr>');

// Ubuntu
document.write('<h3 id="ubuntu">Ubuntu</h3>');

for (let release in ubuntu.releases) {
  document.write(`<h4>${ubuntu.releases[release].version} (${ubuntu.releases[release].codename})</h4>`);
  document.write('<ul>');

  for (let edition in ubuntu.editions) {
    if (edition === 'desktop') {
      download_link = `${base_mirror_link}/ubuntu-releases/${release}/`;

      document.write(`<li><a href="${download_link}">Ubuntu ${ubuntu.releases[release].version} Desktop/Server</a></li>`);
    }
    else if (!['desktop', 'server'].includes(edition)) {
      download_link = `${base_mirror_link}/ubuntu-cdimage/${edition}/releases/${release}/release/`;

      if (edition === 'ubuntu-base') {
        document.write(`<li><a href="${download_link}">Ubuntu ${ubuntu.releases[release].version} ${ubuntu.editions[edition]}</a></li>`);
      }
      else {
        document.write(`<li><a href="${download_link}">${ubuntu.editions[edition]} ${ubuntu.releases[release].version}</a></li>`);
      }
    }
  }

  document.write('</ul>');
}

document.write('<hr>');

// Linux Mint
document.write('<h3 id="linux_mint">Linux Mint</h3>');
document.write('<ul>');

for (let release of linux_mint.releases) {
  download_link = `${base_mirror_link}/linuxmint/stable/${release.version}/`;

  document.write(`<li><a href="${download_link}">Linux Mint ${release.version} "${release.codename}"</a></li>`);
}

document.write('</ul>');
document.write('<hr>');

// Arch Linux
document.write('<h3 id="arch_linux">Arch Linux</h3>');
document.write('<ul>');

for (let release of arch_linux.releases) {
  download_link = `${base_mirror_link}/archlinux/iso/${release}/`;

  document.write(`<li><a href="${download_link}">Arch Linux ${release}</a></li>`);
}

document.write('</ul>');

document.write('<hr>');

// Fedora
document.write('<h3 id="fedora">Fedora</h3>');
document.write('<ul>');
  download_link = `${base_mirror_link}/fedora/linux/releases/${fedora.version}/${fedora.edition}/${fedora.arch}/iso/`;

  document.write(`<li><a href="${download_link}">Fedora ${fedora.version} ${fedora.edition}</a></li>`);
document.write('</ul>');
