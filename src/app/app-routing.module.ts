import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { EditPostComponent } from './views/edit-post/edit-post.component';
import { PostsComponent } from './views/posts/posts.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SinglePostComponent } from './views/single-post/single-post.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  // {path: '', component:UsersComponent},
  {path: '', component:PostsComponent},
  {path: 'posts', component:PostsComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'about', component:AboutComponent},
  {path: 'posts/:id', component:SinglePostComponent},
  {path: 'posts/editPosts/:id', component:EditPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
