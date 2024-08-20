import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RedirectionService } from '../service/redirection.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  navItems = [
    { label: 'ABOUT', id: 'about' },
    { label: 'CONTACT', id: 'contact', url: 'https://form.jotform.com/242323950402447' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'RESUME', id: 'resume', url: 'https://drive.google.com/file/d/1-fDMymbAkpvR7OlnEaWFwxl9BxtE3nYO/view?usp=sharing' }
    
  ];

  constructor(private redirectionService: RedirectionService) {}

  handleNavigation(item: { id: string, url?: string }): void {
    if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      this.redirectionService.scrollToSection(item.id);
    }
  }
}
