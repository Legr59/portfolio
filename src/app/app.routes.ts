import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Education } from './components/education/education';
import { Professional } from './components/professional/professional';
import { Projects } from './components/projects/projects';
import { Activities } from './components/activities/activities';
import { Mobility } from './components/mobility/mobility';
import { Contact } from './components/contact/contact';

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