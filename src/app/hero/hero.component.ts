import { Component, OnInit } from '@angular/core';
import { TargetAppConfig } from '../config/target-app-config.model';
import { TargetAppConfigService } from '../service/target-app-config.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit{
  targetConfig!: TargetAppConfig;

  constructor(
    private targetAppConfigService: TargetAppConfigService,
  ) {}

  ngOnInit() {
    this.targetConfig = this.targetAppConfigService.getTargetConfig();
    console.log('target config:', this.targetConfig);
  }

}
