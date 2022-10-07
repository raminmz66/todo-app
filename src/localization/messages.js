const languages = import.meta.globEager('./languages/*.json');

const messages = {};

for (const path in languages) {
    const key = path.match(/\/([^\/]+)\.json$/)[1];
    messages[key] = languages[path].default;
}

export default messages;