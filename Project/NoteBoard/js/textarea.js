
// https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resizevar
var resizingTextareas = [].slice.call(document.querySelectorAll('textarea[autoresize'));
resizingTextareas.forEach(function(textarea) {
    textarea.addEventListener('input', autoresize,false);
});
function autoresize(){
    this.style.height = 'auto';
    this.style.height = this.scrollHeight+'px';
    this.scrollTop = this.scrollHeight;
    window.scrollTo(window.scrollLeft,(this.scrollTop + this.scrollHeight));
}