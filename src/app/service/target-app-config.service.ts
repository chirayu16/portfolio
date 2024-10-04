import { Injectable } from '@angular/core';

/*
 * @ts-ignore
 * Since the target config module is temporarily generated during build time, we are supressing the warnings typescript gives us when it doesn't find this file.
 * This is safe to do because we can guarantee that this file will be present after the build
 */
import { targetConfig } from '../config/config';

import { TargetAppConfig } from '../config/target-app-config.model';

@Injectable({
  providedIn: 'root',
})
export class TargetAppConfigService {
  getTargetConfig(): TargetAppConfig {
    return targetConfig;
  }
}
