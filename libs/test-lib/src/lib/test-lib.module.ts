import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TestComponent } from './test/test.component';

export const testLibRoutes: Route[] = [{path: '', pathMatch: 'full', component: TestComponent}];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(testLibRoutes)],
  declarations: [TestComponent],
})
export class TestLibModule {}
