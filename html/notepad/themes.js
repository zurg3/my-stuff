// Themes
const themes = {
  system: {
    name: 'System Theme',
    description: 'Light or Dark',
    colors: []
  },
  light: {
    name: 'Light Theme',
    description: '',
    colors: ['#ffffff', '#000000']
  },
  dark: {
    name: 'Dark Theme',
    description: '',
    colors: ['#000000', '#ffffff']
  },
  terminal: {
    name: 'Terminal Theme',
    description: '',
    colors: ['#000000', '#008000']
  },
  midnight: {
    name: 'Midnight Theme',
    description: '',
    colors: ['#191970', '#ffd700']
  },
  editorjs: {
    name: 'EditorJS Theme',
    description: 'Colors taken from https://zurg3.github.io/my-stuff/html/editor_editorjs.html',
    colors: ['#f5eedb', '#19160f']
  },
  zen: {
    name: 'Zen Theme',
    description: 'a.k.a. Solarized, colors taken from https://zen.unit.ms',
    colors: ['#fdf6e3', '#657b83']
  },
  atom: {
    name: 'Atom Theme',
    description: 'a.k.a. Atom One Dark',
    colors: ['#282c34', '#abb2bf']
  },
  abyss: {
    name: 'Abyss Theme',
    description: 'Colors taken from Visual Studio Code',
    colors: ['#000c18', '#6688cc']
  },
  kimbie: {
    name: 'Kimbie Dark Theme',
    description: 'Colors taken from Visual Studio Code',
    colors: ['#221a0f', '#d3af86']
  },
  red: {
    name: 'Red Theme',
    description: 'Colors taken from Visual Studio Code',
    colors: ['#390000', '#f8f8f8']
  },
  solarized: {
    name: 'Solarized Dark Theme',
    description: 'Colors taken from Visual Studio Code',
    colors: ['#002b36', '#839496']
  },
  tomorrow: {
    name: 'Tomorrow Night Blue Theme',
    description: 'Colors taken from Visual Studio Code',
    colors: ['#002451', '#ffffff']
  },
  dracula: {
    name: 'Dracula Theme',
    description: '',
    colors: ['#282a36', '#f8f8f2']
  },
  ocean: {
    name: 'Ocean Breeze Theme',
    description: 'Colors and name suggested by GPT-4o mini',
    colors: ['#e0f7fa', '#006064']
  },
  forest: {
    name: 'Forest Green Theme',
    description: 'Colors and name suggested by GPT-4o mini',
    colors: ['#2e3a2c', '#e0f7fa']
  },
  sunny: {
    name: 'Sunny Orange Theme',
    description: 'Colors and name suggested by GPT-4o mini',
    colors: ['#ffcc80', '#4e342e']
  },
  galactic: {
    name: 'Galactic Nebula Theme',
    description: 'Colors and name suggested by GPT-4o mini',
    colors: ['#1a1a2e', '#e94560']
  },
  retro: {
    name: 'Retro Wave Theme',
    description: 'Colors and name suggested by GPT-4o mini',
    colors: ['#2b003c', '#ff6f61']
  },
  vintage: {
    name: 'Vintage Paper Theme',
    description: 'Colors and name suggested by GPT-4o mini',
    colors: ['#f5f5dc', '#8b4513']
  },
  desert: {
    name: 'Desert Mirage Theme',
    description: 'Colors and name suggested by GPT-4o mini',
    colors: ['#d2b48c', '#8b4513']
  },
  autumn: {
    name: 'Autumn Leaves Theme',
    description: 'Colors and name suggested by GPT-4o mini',
    colors: ['#8b4513', '#ff8c00']
  },
  copper: {
    name: 'Copper Evening Theme',
    description: 'Name suggested by GPT-4o mini',
    colors: ['#24272d', '#d56835']
  },
  rose: {
    name: 'Night Rose Theme',
    description: 'Name suggested by GPT-4o mini',
    colors: ['#3d2542', '#f53a7f']
  },
  amethyst: {
    name: 'Midnight Amethyst Theme',
    description: 'Name suggested by GPT-4o mini',
    colors: ['#0f1623', '#b481c4']
  },
  neon: {
    name: 'Deep Neon Theme',
    description: 'Name suggested by GPT-4o mini',
    colors: ['#1f4060', '#31da52']
  },
  coral: {
    name: 'Coral Sunset Theme',
    description: 'Name suggested by GPT-4o mini',
    colors: ['#6f4252', '#fc5717']
  },
  peachy: {
    name: 'Peachy Passion Theme',
    description: 'Name suggested by GPT-4o mini',
    colors: ['#ffc19b', '#f8270e']
  },
  emerald: {
    name: 'Emerald Glow Theme',
    description: 'Name suggested by GPT-4o mini',
    colors: ['#345845', '#6cfa29']
  },
  teal: {
    name: 'Mystic Teal Theme',
    description: 'Name suggested by GPT-4o mini',
    colors: ['#0c0104', '#46dbc8']
  },
  ember: {
    name: 'Golden Ember Theme',
    description: 'Name suggested by GPT-4o mini',
    colors: ['#43332a', '#fbe706']
  },
  lime: {
    name: 'Lime Shadow Theme',
    description: 'Name suggested by GPT-4o mini',
    colors: ['#0d080b', '#a6e92c']
  },
  bronze: {
    name: 'Bronze Nightfall Theme',
    description: 'Name suggested by GPT-4o mini',
    colors: ['#d69e53', '#2c1176']
  },
  sapphire: {
    name: 'Midnight Sapphire Theme',
    description: 'Name suggested by GPT-4o mini',
    colors: ['#0b0d31', '#b3b7a3']
  },
  makaba: {
    name: 'Makaba Theme',
    description: 'Colors taken from https://2ch.hk',
    colors: ['#eeeeee', '#333333']
  },
  random: {
    name: 'Random Colors Theme',
    description: 'Colors are generated randomly',
    colors: []
  }
};

const theme_keys = Object.keys(themes);
const total_themes = theme_keys.length;
