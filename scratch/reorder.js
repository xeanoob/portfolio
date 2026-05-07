const fs = require('fs');
let content = fs.readFileSync('src/data/projects.ts', 'utf8').replace(/\r\n/g, '\n');

const header = 'export const projects = [\n';
const footer = '\n];\n';

const body = content.substring(header.length, content.length - footer.length);
const blocks = body.split('    },\n    {\n');

const formattedBlocks = blocks.map((block, index) => {
    let b = block;
    if (index === 0) {
        b = b.replace(/^    \{\n/, '');
    }
    if (index === blocks.length - 1) {
        b = b.replace(/\n    \}$/, '');
    }
    return b;
});

const idMap = {};
formattedBlocks.forEach(b => {
    const match = b.match(/id: "([^"]+)"/);
    if (match) idMap[match[1]] = b;
});
console.log(Object.keys(idMap));

// Add video to Complement Outlook
idMap['10'] = idMap['10'].replace(
    '        imageAlt: "Interface du Complément Outlook",',
    '        video: "/Présentation V2 Complément(2).mp4",\n        imageAlt: "Interface du Complément Outlook",'
);

const order = ['10', '09', '05', 'offtime', '01', '06', '00', '02', '03', '07', '08'];

const newBody = order.map(id => '    {\n' + idMap[id] + '\n    }').join(',\n');
const newContent = header + newBody + footer;

fs.writeFileSync('src/data/projects.ts', newContent);
console.log('Done');
