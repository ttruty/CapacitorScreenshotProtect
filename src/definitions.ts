export interface ScreenshotProtectPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
