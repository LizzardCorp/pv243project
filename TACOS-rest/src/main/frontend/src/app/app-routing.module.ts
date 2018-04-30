import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserDetailIdComponent} from "./components/user-detail-id/user-detail-id.component";
import {UserDetailEmailComponent} from "./components/user-detail-email/user-detail-email.component";
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { EshopComponent } from './marketplace/eshop/eshop.component';
import { ProfileComponent } from './marketplace/profile/profile.component';
import { BasketComponent } from './marketplace/basket/basket.component';
import { SubcategoryComponent } from './marketplace/eshop/subcategory/subcategory.component';
import { ProductDetailComponent } from './marketplace/eshop/product-detail/product-detail.component';
import {AdminComponent} from "./admin/admin.component";
import {AdminProfileComponent} from "./admin/admin-profile/admin-profile.component";
import {UsersPageComponent} from "./admin/users-page/users-page.component";
import {OrdersPageComponent} from "./admin/orders-page/orders-page.component";
import {RegisterUserPageComponent} from "./register-user-page/register-user-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {AddUserComponent} from "./admin/add-user/add-user.component";
import {OrderDetailPageComponent} from "./components/order-detail-page/order-detail-page.component";
import {ManufactureComponent} from "./manufacture/manufacture.component";
import {OrdersManagementComponent} from "./manufacture/orders-management/orders-management.component";
import {ProductsManagementComponent} from "./manufacture/products-management/products-management.component";
import {ProductCategoriesManagementComponent} from "./manufacture/product-categories-management/product-categories-management.component";
import {AttributesManagementComponent} from "./manufacture/attributes-management/attributes-management.component";
import {AttributeCategoriesManagementComponent} from "./manufacture/attribute-categories-management/attribute-categories-management.component";
import {TemplatesManagementComponent} from "./manufacture/templates-management/templates-management.component";
import {TemplateDetailPageComponent} from "./components/template-detail-page/template-detail-page.component";



const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'profile',
        component: AdminProfileComponent
      },
      {
        path: 'users',
        component: UsersPageComponent
      },
      {
        path: 'addUser',
        component: AddUserComponent
      },
      {
        path: 'orders',
        component: OrdersPageComponent
      },
      {
        path: 'orders/:id',
        component: OrderDetailPageComponent
      },
      {
        path: 'users/:id',
        component: UserDetailIdComponent
      }
    ]

  },
  {
    path: 'users/filter/email/:email',
    component: UserDetailEmailComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent,
    children: [
      {
        path: 'eshop',
        component: EshopComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'basket',
        component: BasketComponent
      },
      {
        path: 'eshop-category/:id',
        component: SubcategoryComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
      {
        path: '',
        redirectTo: '/eshop',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterUserPageComponent,
  },

  {
    path: 'manufacture',
    component: ManufactureComponent,
    children: [
      {
        path: 'orders',
        component: OrdersManagementComponent
      },
      {
        path: 'products',
        component: ProductsManagementComponent
      },
      {
        path: 'product-categories',
        component: ProductCategoriesManagementComponent
      },
      {
        path: 'attributes',
        component: AttributesManagementComponent
      },
      {
        path: 'attribute-categories',
        component: AttributeCategoriesManagementComponent
      },
      {
        path: 'templates',
        component: TemplatesManagementComponent
      },
      {
        path: 'orders/:id',
        component: OrderDetailPageComponent
      },
      {
        path: 'templates/:id',
        component: TemplateDetailPageComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
