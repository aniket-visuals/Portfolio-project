const fs = require('fs');
let content = fs.readFileSync('hooks/usePortfolioData.ts', 'utf8');

content = content.replace(
    "    image?: string;\n}", 
    "    image?: string;\n    proofImage?: string;\n}"
);

fs.writeFileSync('hooks/usePortfolioData.ts', content);
