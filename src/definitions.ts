
interface PluginsConfig {
    /**
     * These configuration values are available:
     */
    ScreenshotProtect?: {
        /**
         * Configure whether the plugin should be enabled from startup.
         *
         * Only available for Android and iOS.
         *
         * @default true
         * @example true
         */
        enable?: boolean;
    };
}

export interface ScreenshotProtectPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  protectScreen(): Promise<void>;
  disable(): Promise<void>;
}

