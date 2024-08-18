import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RedirectionService } from '../service/redirection.service';
RedirectionService

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  navItems = [
    { label: 'ABOUT', id: 'about' },
    { label: 'CONTACT', id: 'contact' },
    { label: 'PROJECTS', id: 'projects' }
  ];

  constructor(private redirectionService : RedirectionService) {}

  scrollTo(sectionId: string): void {
    this.redirectionService.scrollToSection(sectionId);
  }

}
