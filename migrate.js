const fs = require('fs');
const path = require('path');

const pages = ['professional', 'contact'];

pages.forEach(page => {
    const filePath = path.join(__dirname, '..', `${page}.html`);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Extract content between <nav ...> (end) and <footer
        const navEndIdx = content.indexOf('</nav>');
        const footerStartIdx = content.indexOf('<footer class="footer">');
        
        if (navEndIdx !== -1 && footerStartIdx !== -1) {
            let extracted = content.substring(navEndIdx + 6, footerStartIdx).trim();
            
            // Replacements
            extracted = extracted.replace(/href="index\.html"/g, 'routerLink="/"');
            ['education', 'professional', 'projects', 'activities', 'mobility', 'contact'].forEach(p => {
                extracted = extracted.replace(new RegExp(`href="${p}\\.html"`, 'g'), `routerLink="/${p}"`);
            });
            extracted = extracted.replace(/src="images\//g, 'src="assets/images/');
            extracted = extracted.replace(/href="Source\//g, 'href="assets/Source/');
            extracted = extracted.replace(/src="js\//g, 'src="assets/js/');
            
            const destPath = path.join(__dirname, 'src', 'app', page, `${page}.component.html`);
            fs.writeFileSync(destPath, extracted, 'utf8');
            console.log(`Migrated ${page}`);
        } else {
            console.log(`Skipped ${page} - could not find boundaries`);
        }
    } else {
        console.log(`File not found: ${filePath}`);
    }
});
