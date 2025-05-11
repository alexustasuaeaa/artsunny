import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [Router, HttpClient, TranslateService]
})
export class AppComponent {
  title = 'artsunny';

    constructor(private router: Router,
                private translate: TranslateService) {
      translate.setDefaultLang('en');
      this.translate.use(this.translate.getBrowserLang()!);
    }

  toggleNavbar(): void {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
    if (navbarToggler && navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }

  changeLang() {
    if (this.translate.currentLang ==='ru') {
      this.translate.use('en');
    } else {
      this.translate.use('ru');
    }
  }

  navigateToHome(): void {
    this.router.navigate(['/']);
    this.toggleNavbar();
  }

  navigateToGallery(): void {
    this.router.navigate(['/gallery']);
    this.toggleNavbar();
  }

  navigateToContacts(): void {
    this.router.navigate(['/contacts']);
    this.toggleNavbar();
  }

  navigateToAbout(): void {
    this.router.navigate(['/about']);
    this.toggleNavbar();
  }

  navigateToEvents(): void {
    this.router.navigate(['/events']);
    this.toggleNavbar();
  }

  navigateToOil(): void {
    this.router.navigate(['/gallery/oil']);
    this.toggleNavbar();
  }

  navigateToPastel(): void {
    this.router.navigate(['/gallery/pastel']);
    this.toggleNavbar();
  }

  navigateToSketches(): void {
    this.router.navigate(['/gallery/sketches']);
    this.toggleNavbar();
  }

  navigateToCharcoal(): void {
    this.router.navigate(['/gallery/charcoal']);
    this.toggleNavbar();
  }
}
