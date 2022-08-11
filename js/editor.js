
var editor = ace.edit("maininput");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/json");



var editor1 = ace.edit("maininput1");
editor1.setTheme("ace/theme/monokai");
editor1.session.setMode("ace/mode/json");



function themefn(themename) {
    editor.setTheme("ace/theme/" + themename);
    editor1.setTheme("ace/theme/" + themename);
}       