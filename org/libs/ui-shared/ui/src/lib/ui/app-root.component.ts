import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  imports: [TranslateModule, RouterModule]
})
export class AppRootComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}