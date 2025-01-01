import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    { path: 'gallery', component: GalleryComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: '**', redirectTo: 'gallery' },
  ];
