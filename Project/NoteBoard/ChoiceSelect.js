const tagsEl = document.getElementById('tags');
const textareaEl = document.getElementById('textarea');
textareaEl.focus();
textareaEl.addEventListener('keyup',(e) => {
    createTags(e.target.value);
    if(e.key ==='Enter')
    {
        setTimeout(() => {
            e.target.value = '';
        },10);
        randomSelect();
    }
});

function createTags(input){
    //split
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    console.log(tags)
    tagsEl.innerHTML ="";
    tags.forEach(element => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = element;
        tagsEl.appendChild(tagEl);
    });
}
function randomSelect()
{
    const times =30;
    const interval =    setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() =>{
            unhighlightTag(randomTag);
        },100);
    }, 300);
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag)
        },100)
    },times * 100);
}
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}
function highlightTag(tag){
    if(tag)
        tag.classList.add('highlight');
}
function unhighlightTag(tag){
    if(tag)
        tag.classList.remove('highlight');
}
