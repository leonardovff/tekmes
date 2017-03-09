import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HomeComponent} from './component/home/home.component';
import { ServiceDetailsComponent } from './component/service-details/service-details.component';
import { ServiceDetailsEditComponent } from './component/service-details/service-details-edit/service-details-edit.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: 'servicos/:id/edit',
    component: ServiceDetailsEditComponent,
    canActivate: [AuthGuard]
  },
  { path: 'servicos/:id', component: ServiceDetailsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'not-found', component: HomeComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
