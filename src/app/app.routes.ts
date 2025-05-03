import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { OilComponent } from './gallery/oil/oil.component';
import { PastelComponent } from './gallery/pastel/pastel.component';
import { SketchesComponent } from './gallery/sketches/sketches.component';

export const routes: Routes = [
    { path: 'gallery', component: GalleryComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'events', component: EventsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'gallery/oil', component: OilComponent },
    { path: 'gallery/pastel', component: PastelComponent },
    { path: 'gallery/sketches', component: SketchesComponent },
    { path: '**', redirectTo: 'home' },
  ];
