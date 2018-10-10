import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RadiosComponent} from './radios/radios.component';

const routes: Routes = [
    {path: '',
        component: RadiosComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
