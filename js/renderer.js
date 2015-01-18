var renderer = new marked.Renderer();

renderer.table = function (header, body) {
  return '<table class="table table-condensed">\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};