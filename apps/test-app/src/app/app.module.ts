import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {RouterModule} from "@angular/router";

const testAppRoutes = [
  {path: '' , component: AppComponent, children:[
      {path: '' , loadChildren: () => import('@testlib/core').then(m => m.TestLibModule)}
    ]}
];


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(testAppRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
