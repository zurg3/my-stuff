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
  releases: [
    {
      version: '22.1',
      codename: 'Xia'
    },
    {
      version: '22',
      codename: 'Wilma'
    },
    {
      version: '21.3',
      codename: 'Virginia'
    },
    {
      version: '21.2',
      codename: 'Victoria'
    },
    {
      version: '21.1',
      codename: 'Vera'
    },
    {
      version: '21',
      codename: 'Vanessa'
    },
    {
      version: '20.3',
      codename: 'Una'
    }
  ],
  editions: {
    'cinnamon': 'Cinnamon',
    'mate': 'MATE',
    'xfce': 'Xfce'
  },
  arch: '64bit'
};

// Arch Linux
const current_date = dayjs();

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
