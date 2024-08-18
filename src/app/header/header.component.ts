import { Component } from '@angular/core';
import { RedirectionService } from '../service/redirection.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private redirectionService : RedirectionService) {}

  scrollTo(sectionId: string): void {
    this.redirectionService.scrollToSection(sectionId);
  }
}
