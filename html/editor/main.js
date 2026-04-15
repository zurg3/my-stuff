const editor = new EditorJS({
  holder: 'editorjs',
  tools: {
    header: {
      class: Header,
      inlineToolbar: ['link'],
      config: {
        placeholder: 'Header'
      },
      shortcut: 'CMD+SHIFT+H'
    },
    list: {
      class: EditorjsList,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+L'
    },
    quote: {
      class: Quote,
      inlineToolbar: true,
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: `Quote's author`,
      },
      shortcut: 'CMD+SHIFT+O'
    },
    linkTool: LinkTool,
    delimiter: Delimiter,
    code: {
      class: CodeTool,
      shortcut: 'CMD+SHIFT+C'
    },
    table: {
      class: Table,
      inlineToolbar: true,
      shortcut: 'CMD+ALT+T'
    },
    image: {
      class: SimpleImage,
      inlineToolbar: ['link']
    },
    checklist: {
      class: Checklist,
      inlineToolbar: true
    },
    embed: Embed,
    warning: Warning,
    marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+M'
    },
    inlineCode: {
      class: InlineCode,
      shortcut: 'CMD+SHIFT+C'
    }
  },
  data: {}
});
