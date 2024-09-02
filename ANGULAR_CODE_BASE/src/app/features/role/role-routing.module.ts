import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './components/role/role.component';
import { DashboardComponent } from '../../common/components/dashboard-main/dashboard.component';
import { RoleModalComponent } from 'app/administration/roles/role-modal/role-modal.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'new',
        component: RoleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleRoutingModule {}