import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'org-ui',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './ui.component.html',
})
export class UiComponent {}
