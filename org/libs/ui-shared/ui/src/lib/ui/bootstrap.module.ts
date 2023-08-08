import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ServiceA, ServiceB } from '@org/ui-shared/util';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

export function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    './assets/il8n/',
    './assets/i18n/shared/',
  ]);
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend],
      },
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (serviceA: ServiceA) => () =>
        serviceA.run(),
      deps: [ServiceB],
      multi: true,
    },
  ]
})
export class BootstrapModule {}