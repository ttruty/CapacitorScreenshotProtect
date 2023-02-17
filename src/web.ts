import { WebPlugin } from '@capacitor/core';

import type { ScreenshotProtectPlugin } from './definitions';

export class ScreenshotProtectWeb extends WebPlugin implements ScreenshotProtectPlugin {
  protectScreen(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  disable(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
