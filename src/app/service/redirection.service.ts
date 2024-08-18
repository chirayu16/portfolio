import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedirectionService {

  constructor() { }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);   
    if(element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
  }
}
