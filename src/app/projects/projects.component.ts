import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

interface Project {
  name: string;
  description: string;
  technologies: string;
  imageUrl: string;
  websiteUrl: string;
  codeUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardModule, CommonModule, ButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Todo-List',
      description: 'This is a brief description of Project 1.',
      technologies: 'Stack used: Angular',
      imageUrl: 'assets/images/todolsit.png',
      websiteUrl: '',
      codeUrl: '',
    },
    {
      name: 'Project 1',
      description: 'This is a brief description of Project 1.',
      technologies: 'Stack used: Angular',
      imageUrl: 'img.jpg',
      websiteUrl: '',
      codeUrl: '',
    },
  ];
}