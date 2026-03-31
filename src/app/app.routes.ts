import { Routes } from '@angular/router';
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
];