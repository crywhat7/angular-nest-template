import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ROUTES } from './config/routes.config';
import { MainComponent } from './views/main/main.component';

const routes: Routes = [
  {
    path: CUSTOM_ROUTES.HOME,
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {}
