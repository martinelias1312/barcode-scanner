import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.test.app',
  appName: 'test-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
