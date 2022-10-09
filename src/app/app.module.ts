import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductComponent } from './product.component';
import { InventoryComponent } from './inventory.component';


import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'P', component: ProductComponent },
   { path: 'I', component: InventoryComponent },
   
];


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    InventoryComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	RouterModule.forRoot(appRoutes)
	],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
