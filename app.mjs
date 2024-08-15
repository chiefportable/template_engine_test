function parseTemplate(template, data) {
    return template.replace(/{{(.*?)}}/g, (match, key) => {
        return data[key.trim()] || "";
    });
}

const template = `
    <h1>{{title}}</h1>
    <p>{{content}}</p>
`;

const data = {
    title: "Welcome to my website",
    content: "This is a template parser example",
};

const parsedHtml = parseTemplate(template, data);

const el = document.getElementById("template");

el.innerHTML = parsedHtml;

console.log(el);
