import { NgModule } from '@angular/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconMenu2, IconShoppingCartPlus, IconUser} from 'angular-tabler-icons/icons';

const icons = {
    IconMenu2,
    IconShoppingCartPlus,
    IconUser
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