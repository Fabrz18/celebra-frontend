import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {HttpClient, provideHttpClient, withInterceptors} from '@angular/common/http';
import {loginInterceptor} from './interceptor/login-interceptor';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {Observable} from 'rxjs';

export class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<Record<string, any>> {
    return this.http.get<Record<string, any>>(`/i18n/${lang}.json`);
  }
}

export function httpLoaderFactory(http: HttpClient) {
  return new CustomTranslateLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideHttpClient(withInterceptors([loginInterceptor])),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }).providers!
  ]
};

