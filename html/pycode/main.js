const container = document.getElementById('container');
const input = document.getElementById('input');
const output = document.getElementById('output');
const resizer = document.getElementById('resizer');
const run_code_button = document.getElementById('run_code_button');

let pyodide;

monaco.editor.defineTheme('pycharm-darcula', {
  base: 'vs-dark',
  inherit: true,
  rules: [
    {token: 'keyword', foreground: 'cc7832'},
    {token: 'string', foreground: '6a8759'},
    {token: 'comment', foreground: '808080', fontStyle: 'italic'},
    {token: 'number', foreground: '6897bb'},
    {token: 'type', foreground: 'a9b7c6'},
    {token: 'identifier.function', foreground: 'ffc66d'}
  ],
  colors: {
    'editor.background': '#2b2b2b',
    'editor.foreground': '#a9b7c6',
    'editorLineNumber.foreground': '#606366',
    'editorCursor.foreground': '#bbbbbb',
    'editor.selectionBackground': '#214283',
    'editor.lineHighlightBackground': '#323232'
  }
});

const editor = monaco.editor.create(input, {
  value: '',
  placeholder: '',
  language: 'python',
  theme: 'pycharm-darcula',
  contextmenu: true,
  automaticLayout: true,
  accessibilitySupport: 'off',
  autoIndent: 'full',
  autoIndentOnPaste: true,
  'bracketPairColorization.enabled': false,
  colorDecorators: false,
  colorDecoratorsActivatedOn: 'click',
  folding: true,
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: 12,
  guides: {
    indentation: true
  },
  hideCursorInOverviewRuler: true,
  insertSpaces: true,
  lineHeight: 1.4,
  lineNumbers: 'on',
  links: true,
  matchBrackets: 'near',
  minimap: {
    enabled: false
  },
  mouseWheelZoom: false,
  multiCursorModifier: 'ctrlCmd',
  occurrencesHighlight: 'singleFile',
  renderControlCharacters: false,
  renderLineHighlight: 'all',
  renderWhitespace: 'none',
  rulers: [120],
  scrollbar: {
    horizontalScrollbarSize: 8,
    verticalScrollbarSize: 8
  },
  scrollBeyondLastLine: false,
  selectionHighlight: false,
  showDeprecated: false,
  stickyScroll: {
    enabled: false
  },
  tabSize: 4
});

document.fonts.ready.then(() => monaco.editor.remeasureFonts());

async function init_pyodide() {
  pyodide = await loadPyodide();

  pyodide.setStdout({
    batched: (s) => {
      output.value += `${s}\n`;
      output.scrollTop = output.scrollHeight;
    }
  });

  run_code_button.disabled = false;
  run_code_button.innerText = 'Run';
}

init_pyodide();

async function run_code() {
  if (!pyodide) return;

  try {
    clear_output();

    await pyodide.runPythonAsync(editor.getValue());
  }
  catch (error) {
    output.value += `Error: ${error}\n`;
    output.scrollTop = output.scrollHeight;
  }
}

function clear_output() {
  output.value = '';
}

resizer.addEventListener('mousedown', (e) => {
  e.preventDefault();

  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stop_resize);
});

function resize(e) {
  const container_rect = container.getBoundingClientRect();
  const new_height = e.clientY - container_rect.top;

  if (new_height > 100 && new_height < container_rect.height - 100) {
    input.style.height = `${new_height}px`;
  }
}

function stop_resize() {
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stop_resize);
}
