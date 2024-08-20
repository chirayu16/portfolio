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
      description: 'The Personal To-Do List app allows users to manage tasks efficiently by adding new tasks, viewing pending tasks, and tracking completed tasks.',
      technologies: 'Technologies used: Angular',
      imageUrl: '../../assets/images/to-do-list.png',
      websiteUrl: 'https://personal-todo-list-app.netlify.app/',
      codeUrl: 'https://github.com/chirayu16/toDoList',
    },
    {
      name: 'Github User Search',
      description: 'The GitHub User Search Info app allows users to search for GitHub profiles.  It displays the user’s profile details, including their repository details.',
      technologies: 'Technologies used: Angular',
      imageUrl: '../../assets/images/github-user-search.png',
      websiteUrl: 'https://github-user-repo-info.netlify.app/',
      codeUrl: 'https://github.com/chirayu16/github-user-search',
    },
  ];
}