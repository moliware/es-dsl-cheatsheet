function loadMarkdownFile(name, where) {
  $.get('docs/' + name + '.md', function(data) {
    $(where).html(marked(data, { renderer: renderer }));
    addCopyToClipboard();
  });
}

function addCopyToClipboard() {
    $('tr td:last-child').each(function(index, el) {
        $td = $(el);
        var content = $td.text();
        var nameId = name + "-" + index;
        $td.html('<p id="' + nameId + '" style="float: left;">' + content + '</p> <span class="glyphicon glyphicon-paperclip copy" aria-hidden="true" data-clipboard-target="' + nameId + '"></span>')
    });
    var clip = new ZeroClipboard($(".copy"), {
       moviePath: "js/ZeroClipboard.swf"
    });
}