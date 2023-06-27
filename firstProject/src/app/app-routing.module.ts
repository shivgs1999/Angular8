import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TVComponent } from './products/tv/tv.component';
import { WatchComponent } from './products/watch/watch.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './authGard/auth.guard';
import { CartComponent } from './cart/cart.component';

 
const routes: Routes =  [
  { path:'', redirectTo: 'login', pathMatch: 'full'}, // localhost:4200
  {path: 'login', component: LoginComponent}, 
  { path: 'about-us', canActivate: [AuthGuard], component: AboutusComponent}, // localhost:4200/about-us
  { path: 'contact-us', canActivate: [AuthGuard], component: ContactusComponent},
  { path: 'homepage', canActivate: [AuthGuard], component: HomepageComponent},
  { path: 'cart', component: CartComponent},

  { path: 'products', canActivate: [AuthGuard], component: ProductsComponent, children: [
    { path: 'laptop', component: LaptopComponent},
    { path: 'mobile', component: MobileComponent},
    { path: 'tv', component: TVComponent},
    { path: 'watch', component: WatchComponent},
  ]},
 // {path: 'homepage', canActivate: [AuthGuard], loadChildren: './product/products.module#ProductsModule'},
 // {path: 'postdetails/:id', component: PostdetailsComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
