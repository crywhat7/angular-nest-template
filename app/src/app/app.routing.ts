import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ROUTES } from './config/config';

const routes: Routes = [
  {
    path: CUSTOM_ROUTES.HOME,
    loadChildren: () =>
      import('./modules/main/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
