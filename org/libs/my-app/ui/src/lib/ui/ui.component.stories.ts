import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { UiComponent } from './ui.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { importProvidersFrom } from '@angular/core';
import { BootstrapModule } from '@org/ui-shared/ui';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

const meta: Meta<UiComponent> = {
  component: UiComponent,
  title: 'UiComponent',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TranslateModule],
    }),
    applicationConfig({
      providers: [importProvidersFrom([BootstrapModule])],
    }),
  ],
};
export default meta;
type Story = StoryObj<UiComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ui works!/gi)).toBeTruthy();
  },
};
