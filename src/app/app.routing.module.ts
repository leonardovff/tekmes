import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HomeComponent} from './component/home/home.component';
import { ServiceDetailsComponent} from './component/service-details/service-details.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'servicos', component: ServiceDetailsComponent},
  { path: 'not-found', component: HomeComponent },
  { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
