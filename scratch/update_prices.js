import fs from 'fs';

const filePath = 'src/main.js';
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find price and originalPrice in product objects
// Pattern: price: \d+,(\s+)originalPrice: (\d+)
content = content.replace(/price:\s*(\d+),\s*originalPrice:\s*(\d+)/g, (match, p1, p2) => {
    return `price: ${p2}, originalPrice: ${p2}`;
});

// Also clear any discount text
content = content.replace(/discount:\s*".*?"/g, 'discount: ""');

fs.writeFileSync(filePath, content);
console.log('Successfully updated product prices and cleared discounts.');
