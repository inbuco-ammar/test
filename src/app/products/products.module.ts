import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsNewComponent } from './products-new/products-new.component';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
   {
     path: '',
     component: ProductsComponent,
     children: [
       {
         path: '',
        component:ProductsListComponent
       },
       {
        path: 'new',
       component:ProductsNewComponent
      },
    
       { path: '', redirectTo: 'list', pathMatch: 'full' },
     ]
   },
 ];

@NgModule({
  declarations: [ProductsComponent, ProductsListComponent, ProductsNewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule

  ]
})
export class ProductsModule { }
