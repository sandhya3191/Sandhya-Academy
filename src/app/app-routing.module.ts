import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { PopularComponent } from './home/popular/popular.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CanActivate, CanActivateChild } from './auth.guard';
import { AuthGuardService } from './Services/authguard.service';

const routes: Routes = [
  {path:'',component:HomeComponent},
  //{path:'', redirectTo:HomeComponent,pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent,canDeactivate:[(comp:ContactComponent)=>{return comp.canExit();}]},
  {path:'Courses',component:CoursesComponent,resolve:{courses:AuthGuardService}},
  //{path:'Courses/Course/:id',component:CourseDetailComponent},
  {path:'Courses', canActivateChild:[CanActivateChild], children:[
    {path:'Course/:id',component:CourseDetailComponent},
    {path:'Popular',component:PopularComponent},
    {path:'Check',component:CheckoutComponent}
  ]},
  {path:'Login',component:LoginComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
