import frontMatter from 'front-matter';
import marked from 'marked';
import hljs from 'highlight.js';
import objectAssign from 'object-assign';
import { kebabCase } from 'lodash';

const highlight = (str, lang) => {
    if ((lang !== null) && hljs.getLanguage(lang)) {
        try {
            return hljs.highlight(lang, str).value
        } catch (_error) {
            console.error(_error)
        }
    }
    try {
        return hljs.highlightAuto(str).value
    } catch (_error) {
        console.error(_error)
    }
    return ''
};

let renderer = new marked.Renderer();

renderer.code = function (code, lang) {
    var result = [
        '<pre>',
        highlight(code, lang),
        '</pre>'
    ].join('');

    return result
};

renderer.paragraph = function (text) {
    if (text.indexOf('!') === 0) {
        return `<p class='paragraph'>${text.replace('!', '')}</p>`;
    }
    return `<p class='paragraph'>${text}</p>`;
};

renderer.link = function (href, title, text) {
    return `<a href='${href}' ${title ? ' title="' + title + '""' : ''} class='link'>${text}</a>`;
};

renderer.list = function (body, ordered) {
    var type = ordered ? 'ol' : 'ul';

    return '<' + type + ' class="list">\n' + body + '</' + type + '>\n';
};

renderer.image = function (href, title, text) {
    var img = `<img src='${href}' alt='${text}'`;

    if (title === 'mobile') {
        img = `<div class='mobile image'>${img} class='image' /></div>`;
    } else if (title === 'desktop') {
        img = `<div class='desktop image'>${img} class='image' /></div>`;
    } else if (title) {
        img = `<div class='hero image'>${img} class='image' title='${title}'/></div>`;
    } else {
        img = `<div class='image'>${img} class='image'/></div>`;
    }

    return img;
};

renderer.blockquote = function (quote) {
    return '<blockquote class="quote">\n' + quote + '</blockquote>\n';
};

renderer.heading = function (text, level) {
    var name = kebabCase(text);
    var levelClasses;

    switch (level) {
        case 1: levelClasses = 'hero title'; break;
        case 2: levelClasses = 'figure title'; break;
        case 3: levelClasses = 'cta title'; break;
        default: levelClasses = 'title'; break;
    }
    if (level < 4) {
        return `<h${level} id="${name}" class='${levelClasses}'><a href="#${name}" class='Cur(d)!'>${text}</a></h${level}>`;
    } else {
        return `<h${level} class='${levelClasses}'>${text}</h${level}>`;
    }
};

marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});

module.exports = function (content) {
    this.cacheable();

    const meta = frontMatter(content);
    const body = marked(meta.body);
    const result = objectAssign({}, meta.attributes, {
        body
    });

    this.value = result;

    return `module.exports = ${JSON.stringify(result)}`;
};
