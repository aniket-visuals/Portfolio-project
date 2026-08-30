const fs = require('fs');
let content = fs.readFileSync('components/Admin.tsx', 'utf8');

content = content.replace(
    `    const updateSaas = (index: number, field: keyof VideoItem, value: string) => {
        const newData = { ...editData };
        newData.saas[index][field] = value;
        setEditData(newData);
    };`,
    `    const updateSaas = (index: number, field: keyof VideoItem, value: string) => {
        const newData = { ...editData };
        newData.saas = [...newData.saas];
        newData.saas[index] = { ...newData.saas[index], [field]: value };
        setEditData(newData);
    };`
);

content = content.replace(
    `    const updateLongForm = (index: number, field: keyof VideoItem, value: string) => {
        const newData = { ...editData };
        newData.longform[index][field] = value;
        setEditData(newData);
    };`,
    `    const updateLongForm = (index: number, field: keyof VideoItem, value: string) => {
        const newData = { ...editData };
        newData.longform = [...newData.longform];
        newData.longform[index] = { ...newData.longform[index], [field]: value };
        setEditData(newData);
    };`
);

content = content.replace(
    `    const updateTestimonial = (index: number, field: keyof typeof editData.testimonials[0], value: string) => {
        const newData = { ...editData };
        newData.testimonials[index][field] = value;
        setEditData(newData);
    };`,
    `    const updateTestimonial = (index: number, field: keyof typeof editData.testimonials[0], value: string) => {
        const newData = { ...editData };
        newData.testimonials = [...newData.testimonials];
        newData.testimonials[index] = { ...newData.testimonials[index], [field]: value };
        setEditData(newData);
    };`
);

fs.writeFileSync('components/Admin.tsx', content);
