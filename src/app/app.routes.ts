import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'gallery', component: GalleryComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'gallery' },
  ];
