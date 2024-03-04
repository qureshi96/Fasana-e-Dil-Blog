import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { PostpreviewComponent } from './postpreview/postpreview.component';
import { PostviewComponent } from './postview/postview.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    ContentComponent,
    FooterComponent,
    NavbarComponent,
    HomepageComponent,
    AboutComponent,
    PostsComponent,
    PostpreviewComponent,
    PostviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFireAuth],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
