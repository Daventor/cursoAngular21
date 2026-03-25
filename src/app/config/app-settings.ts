import { InjectionToken } from "@angular/core"

export interface AppSettings{
    apiUrl: string,
    timeout: number,
    featureFlags:{
        darkMode: boolean,
        enableChat: boolean
    }
}

export const defaultAppSettings: AppSettings = {
    apiUrl: 'http://localhost:3000/api',
    timeout: 5000,
    featureFlags: {
        darkMode: false,
        enableChat: true
    }
}

export const APP_SETTINGS = new InjectionToken<AppSettings>('app.settings')

export type AppHook = () => void;
export const APP_HOOKS = new InjectionToken<AppHook[]>('APP_HOOKS')