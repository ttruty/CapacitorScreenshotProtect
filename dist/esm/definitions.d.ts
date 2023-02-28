export interface ScreenshotProtectPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    protectScreen(): Promise<void>;
    disable(): Promise<void>;
}
