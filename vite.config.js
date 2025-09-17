// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        resolve(__dirname, 'index.html'),
        resolve(__dirname, 'transmissionConfig.html'),
        resolve(__dirname, 'mqttConfig.html'),
        resolve(__dirname, 'serialConfig.html'),
        resolve(__dirname, 'analogConfig.html'),
        resolve(__dirname, 'firmwareUpdate.html'),
        resolve(__dirname, 'rtcSync.html'),
        resolve(__dirname, 'systemSetting.html'),
      ]
    },
  },
})