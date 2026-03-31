const fs = require('fs');
const path = require('path');

const pages = ['home', 'education', 'professional', 'projects', 'activities', 'mobility', 'contact'];

pages.forEach(page => {
    // 1. the ts file
    const tsFile = path.join(__dirname, 'src', 'app', page, `${page}.ts`);
    if (fs.existsSync(tsFile)) {
        let tsContent = fs.readFileSync(tsFile, 'utf8');
        if (!tsContent.includes('RouterLink')) {
            tsContent = "import { RouterLink } from '@angular/router';\n" + tsContent;
            tsContent = tsContent.replace('imports: []', 'imports: [RouterLink]');
        }
        
        // Use the component.html instead of the empty bare html
        tsContent = tsContent.replace(`templateUrl: './${page}.html'`, `templateUrl: './${page}.component.html'`);
        fs.writeFileSync(tsFile, tsContent, 'utf8');
    }

    // 2. delete the empty generated HTML if we created component.html
    const emptyHtml = path.join(__dirname, 'src', 'app', page, `${page}.html`);
    if (fs.existsSync(emptyHtml)) {
        fs.unlinkSync(emptyHtml);
    }
});

// 3. Fix app.routes.ts
const routesFile = path.join(__dirname, 'src', 'app', 'app.routes.ts');
if (fs.existsSync(routesFile)) {
    let content = `import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Education } from './education/education';
import { Professional } from './professional/professional';
import { Projects } from './projects/projects';
import { Activities } from './activities/activities';
import { Mobility } from './mobility/mobility';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'education', component: Education },
  { path: 'professional', component: Professional },
  { path: 'projects', component: Projects },
  { path: 'activities', component: Activities },
  { path: 'mobility', component: Mobility },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];`;
    fs.writeFileSync(routesFile, content, 'utf8');
}
console.log('Fixed components and routes!');
