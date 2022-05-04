import { NgModule } from '@angular/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconMenu2 } from 'angular-tabler-icons/icons';

const icons = {
    IconMenu2,
  };
  
  @NgModule({
    imports: [
      TablerIconsModule.pick(icons)
    ],
    exports: [
      TablerIconsModule
    ]
  })
  export class IconsModule { }