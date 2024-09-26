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
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'RESUME', id: 'resume', url: '../../assets/images/Chirayu_Frontend.pdf' }
    
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
