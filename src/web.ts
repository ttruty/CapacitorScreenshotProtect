import { WebPlugin } from '@capacitor/core';

import type { ScreenshotProtectPlugin } from './definitions';

export class ScreenshotProtectWeb extends WebPlugin implements ScreenshotProtectPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
