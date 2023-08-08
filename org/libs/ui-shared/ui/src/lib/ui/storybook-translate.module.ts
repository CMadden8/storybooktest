import { HttpBackend } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";

function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    './assets/standard-translations/',
    './assets/shared-translations/',
  ]);
}

@NgModule({
  imports: [TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpBackend],
    },
  })],
})
export class StorybookTranslateModule {
  constructor(translateService: TranslateService) {
    console.log("Configuring the translation service: ", translateService);
    console.log("Translations: ", translateService.translations);
    translateService.setDefaultLang("en");
    translateService.use("en");
  }
}