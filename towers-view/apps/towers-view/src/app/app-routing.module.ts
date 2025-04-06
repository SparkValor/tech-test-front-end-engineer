import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('tower').then((m) => m.TowerComponent),
  },
  {
    path: 'tower',
    loadComponent: () =>
      import('tower').then((m) => m.TowerComponent),
  },
  {
    path: 'tower/:number',
    loadComponent: () =>
      import('tower').then((m) => m.TowerComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
