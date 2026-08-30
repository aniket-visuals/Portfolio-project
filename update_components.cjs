const fs = require('fs');

function updateSaas() {
    let content = fs.readFileSync('components/SaasExplainer.tsx', 'utf8');
    content = content.replace("import React, { useState } from 'react';", "import React, { useState } from 'react';\nimport { usePortfolioData, VideoItem } from '../hooks/usePortfolioData';");
    content = content.replace(/interface VideoItem \{[\s\S]*?\}/, "");
    content = content.replace(/const ITEMS = \[[\s\S]*?\];/, "const { data } = usePortfolioData();\n    const ITEMS = data.saas;");
    fs.writeFileSync('components/SaasExplainer.tsx', content);
}

function updateLongForm() {
    let content = fs.readFileSync('components/LongForm.tsx', 'utf8');
    content = content.replace("import React, { useState } from 'react';", "import React, { useState } from 'react';\nimport { usePortfolioData, VideoItem } from '../hooks/usePortfolioData';");
    content = content.replace(/interface VideoItem \{[\s\S]*?\}/, "");
    content = content.replace(/const ITEMS = \[[\s\S]*?\];/, "const { data } = usePortfolioData();\n    const ITEMS = data.longform;");
    fs.writeFileSync('components/LongForm.tsx', content);
}

function updateShortForm() {
    let content = fs.readFileSync('components/ShortForm.tsx', 'utf8');
    content = content.replace("import React, { useRef, useState } from 'react';", "import React, { useRef, useState } from 'react';\nimport { usePortfolioData } from '../hooks/usePortfolioData';");
    content = content.replace(/const VIDEOS = \[[\s\S]*?\];/, "const { data } = usePortfolioData();\n    const VIDEOS = data.shortform;");
    fs.writeFileSync('components/ShortForm.tsx', content);
}

updateSaas();
updateLongForm();
updateShortForm();
