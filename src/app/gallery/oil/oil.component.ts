import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-oil-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule],
  templateUrl: './oil.component.html',
  styleUrl: './oil.component.scss',
  providers: [RouterOutlet, Router, TranslateService]
})
export class OilComponent {

  constructor (private translate: TranslateService) {

  }
}
