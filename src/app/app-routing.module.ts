import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarouselComponent} from 'src/app/carousel/carousel.component';
import {AccordComponent} from 'src/app/accord/accord.component';
import {ModelComponent} from 'src/app/model/model.component';
import {TypeheadComponent} from 'src/app/typehead/typehead.component';
import {PopoverComponent} from 'src/app/popover/popover.component';

const routes: Routes = [
  {
    path:"",
    component:AccordComponent
  },
  {
    path:"accord",
    component:AccordComponent
  },
  {
    path:"carousel",
    component:CarouselComponent
  },
  {
    path:"model",
    component:ModelComponent
  },
  {
    path:"typehead",
    component:TypeheadComponent

  },
  {
    path:"popover",
    component: PopoverComponent
  }
];
RouterModule.forRoot(routes, {useHash: true})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
