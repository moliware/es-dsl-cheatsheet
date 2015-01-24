function loadMarkdownFile(name, where) {
  $.get('docs/' + name + '.md', function(data) {
    $(where).html(marked(data, { renderer: renderer }));
  });
}