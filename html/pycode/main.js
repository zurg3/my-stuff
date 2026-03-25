const container = document.getElementById('container');
const input = document.getElementById('input');
const output = document.getElementById('output');
const resizer = document.getElementById('resizer');
const run_code_button = document.getElementById('run_code_button');

let pyodide;

const editor = monaco.editor.create(input, {
  value: '',
  placeholder: '',
  language: 'python',
  theme: 'vs-dark',
  contextmenu: true,
  automaticLayout: true,
  accessibilitySupport: 'off',
  autoIndent: 'full',
  autoIndentOnPaste: true,
  'bracketPairColorization.enabled': false,
  colorDecorators: false,
  colorDecoratorsActivatedOn: 'click',
  folding: true,
  fontFamily: 'Menlo, Consolas, "DejaVu Sans Mono", monospace',
  fontSize: 13,
  guides: {
    indentation: true
  },
  insertSpaces: true,
  lineHeight: 1.45,
  lineNumbers: 'on',
  links: true,
  matchBrackets: 'near',
  minimap: {
    enabled: false
  },
  mouseWheelZoom: true,
  multiCursorModifier: 'ctrlCmd',
  occurrencesHighlight: 'off',
  renderLineHighlight: 'line',
  renderWhitespace: 'none',
  scrollBeyondLastLine: false,
  selectionHighlight: false,
  showDeprecated: false,
  stickyScroll: {
    enabled: false
  },
  tabSize: 4
});

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
