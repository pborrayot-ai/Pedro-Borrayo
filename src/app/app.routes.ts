import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./misistema/pages/dashboard/dashboard').then(
        (m) => m.Dashboard
      ),
    },
  children: [
      {
        path: 'crear',
        loadComponent: () =>
          import('./misistema/pages/crear_cliente/crear_cliente').then(
            (m) => m.CrearCliente,
          ),
      },
      {
        path: 'consultar',
        loadComponent: () =>
          import('./misistema/pages/consultar_cliente/consultar_cliente').then(
            (m) => m.ConsultarCliente,
          ),
      },
    ],
  {
    path: '**',
    redirectTo: 'dashboard',
  }
];