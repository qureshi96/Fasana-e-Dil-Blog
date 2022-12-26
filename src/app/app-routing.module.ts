import {NgModule} from'@angular/core'
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostsComponent } from './posts/posts.component';

const routes:Routes=[
    { path: "", redirectTo: "/home", pathMatch: "full" }, //default route
    { path: "home", component: HomepageComponent },
    { path: "about", component: AboutComponent },
    { path: "posts", component: PostsComponent },
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash:true})],
    exports: [RouterModule],
})
export class AppRoutingModule{}