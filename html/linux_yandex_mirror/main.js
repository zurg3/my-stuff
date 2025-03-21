const current_date = dayjs();

const base_mirror_link = 'https://mirror.yandex.ru';
let download_link = '';

// Debian
const debian = {
  version: '12.10.0',
  codename: 'Bookworm',
  arch: 'amd64'
};

// Ubuntu
const ubuntu = {
  releases: {
    '24.10': {
      version: '24.10',
      codename: 'Oracular Oriole'
    },
    '24.04': {
      version: '24.04.2 LTS',
      codename: 'Noble Numbat'
    },
    '22.04': {
      version: '22.04.5 LTS',
      codename: 'Jammy Jellyfish'
    },
    '20.04': {
      version: '20.04.6 LTS',
      codename: 'Focal Fossa'
    },
    '18.04': {
      version: '18.04.6 LTS',
      codename: 'Bionic Beaver'
    },
    '16.04': {
      version: '16.04.7 LTS',
      codename: 'Xenial Xerus'
    }
  },
  editions: {
    'desktop': 'Desktop',
    'server': 'Server',
    'ubuntu-base': 'Base',
    'ubuntu-mate': 'Ubuntu MATE',
    'xubuntu': 'Xubuntu',
    'lubuntu': 'Lubuntu',
    'kubuntu': 'Kubuntu'
  },
  arch: 'amd64'
};

// Linux Mint
const linux_mint = {
  releases: {
    '22.1': {codename: 'Xia'},
    '22': {codename: 'Wilma'},
    '21.3': {codename: 'Virginia'},
    '21.2': {codename: 'Victoria'},
    '21.1': {codename: 'Vera'},
    '21': {codename: 'Vanessa'},
    '20.3': {codename: 'Una'}
  },
  editions: {
    'cinnamon': 'Cinnamon',
    'mate': 'MATE',
    'xfce': 'Xfce'
  },
  arch: '64bit'
};

// Arch Linux
const arch_linux = {
  releases: [
    `${current_date.format('YYYY.MM')}.01`,
    `${current_date.subtract(1, 'month').format('YYYY.MM')}.01`,
    `${current_date.subtract(2, 'month').format('YYYY.MM')}.01`
  ],
  arch: 'x86_64'
};

// Fedora
const fedora = {
  version: '41',
  edition: 'Workstation',
  arch: 'x86_64'
};

/* ********** */

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
    if (['desktop', 'server'].includes(edition)) {
      download_link = `${base_mirror_link}/ubuntu-releases/${release}/`;
    }
    else {
      download_link = `${base_mirror_link}/ubuntu-cdimage/${edition}/releases/${release}/release/`;
    }

    if (['ubuntu-mate', 'xubuntu', 'lubuntu', 'kubuntu'].includes(edition)) {
      document.write(`<li><a href="${download_link}">${ubuntu.editions[edition]} ${ubuntu.releases[release].version}</a></li>`);
    }
    else {
      document.write(`<li><a href="${download_link}">Ubuntu ${ubuntu.releases[release].version} ${ubuntu.editions[edition]}</a></li>`);
    }
  }

  document.write('</ul>');
}

document.write('<hr>');

// Linux Mint
const linux_mint_releases_sort = Object.keys(linux_mint.releases).toSorted().toReversed();

document.write('<h3 id="linux_mint">Linux Mint</h3>');

for (let release of linux_mint_releases_sort) {
  document.write(`<h4>${release} "${linux_mint.releases[release].codename}"</h4>`);
  document.write('<ul>');

  for (let edition in linux_mint.editions) {
    download_link = `${base_mirror_link}/linuxmint/stable/${release}/`;

    document.write(`<li><a href="${download_link}">Linux Mint ${release} "${linux_mint.releases[release].codename}" - ${linux_mint.editions[edition]}</a></li>`);
  }

  document.write('</ul>');
}

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
