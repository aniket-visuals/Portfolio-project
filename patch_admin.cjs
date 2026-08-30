const fs = require('fs');
let content = fs.readFileSync('components/Admin.tsx', 'utf8');

content = content.replace(
    `    useEffect(() => {
        if (data && !editData) {
            setEditData(JSON.parse(JSON.stringify(data)));
        }
    }, [data, editData]);`,
    `    useEffect(() => {
        if (data && !editData && !loading) {
            setEditData(JSON.parse(JSON.stringify(data)));
        }
    }, [data, editData, loading]);`
);

fs.writeFileSync('components/Admin.tsx', content);
