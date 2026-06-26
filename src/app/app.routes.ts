import { Routes } from '@angular/router';
import { Home } from './components/home/home.component';
import { Education } from './components/education/education.component';
import { Professional } from './components/professional/professional.component';
import { Projects } from './components/projects/projects.component';
import { Activities } from './components/activities/activities.component';
import { Mobility } from './components/mobility/mobility.component';
import { Contact } from './components/contact/contact.component';

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