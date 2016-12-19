import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import {AngularComponent} from "./angular.component";
import {BootstrapComponent} from "./bootstrap.component";
import {SUB_TOPIC_ROUTES} from "./subtopic.routes";


const APP_ROUTES: Routes = [
{path: 'AngularJs', component: AngularComponent},
{path: 'AngularJs', component: AngularComponent, children: SUB_TOPIC_ROUTES},
{path:'Bootstrap', component:BootstrapComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);