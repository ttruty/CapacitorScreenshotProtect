import { WebPlugin } from '@capacitor/core';
import type { ScreenshotProtectPlugin } from './definitions';
export declare class ScreenshotProtectWeb extends WebPlugin implements ScreenshotProtectPlugin {
    protectScreen(): Promise<void>;
    disable(): Promise<void>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
