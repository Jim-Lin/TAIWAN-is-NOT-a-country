var css = '.ROCsuck { color: blue; font-weight: bold; text-decoration: underline; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
style.appendChild(document.createTextNode(css));
head.appendChild(style);

function replace(element) {
    element.innerHTML = element.innerHTML
    .replace(/(\bTW\b|\bTAIWAN\b)(?!([^<]+)?>)/ig, '<span class="ROCsuck">ROC</span>')
    .replace(/(台灣|臺灣)/g, '<span class="ROCsuck">中華民國</span>');
}

document.querySelectorAll("p").forEach(replace);
document.querySelectorAll("div").forEach(replace);
