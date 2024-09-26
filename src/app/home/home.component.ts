import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { NavComponent } from '../nav/nav.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProjectsComponent, ContactComponent, AboutComponent, NavComponent, ExperienceComponent, ResumeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
