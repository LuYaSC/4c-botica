import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { MedicalViewComponent } from './medical-view/medical-view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'store', component: StoreComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'mision', component: MisionComponent },
  { path: 'medical-view/:id', component: MedicalViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirige la ruta raíz a page1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
