import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  providers: [RouterOutlet, Router, TranslateService]
})
export class GalleryComponent {

  constructor (private translate: TranslateService) {

  }
}
