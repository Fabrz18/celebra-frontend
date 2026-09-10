import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

(function () {
  const script1 = document.createElement('script');
  script1.src = "https://cdn.botpress.cloud/webchat/v3.4/inject.js";
  script1.defer = true;
  document.body.appendChild(script1);

  const script2 = document.createElement('script');
  script2.src = "https://files.bpcontent.cloud/2025/11/24/21/20251124215022-R8UW9CO6.js";
  script2.defer = true;
  document.body.appendChild(script2);
})();
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

