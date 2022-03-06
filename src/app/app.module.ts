import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './views/posts/posts.component';
import { UsersComponent } from './views/users/users.component';
import { AboutComponent } from './views/about/about.component';
import { ProfileComponent } from './views/profile/profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PostsService } from './services/posts.service';
import {HttpClientModule} from '@angular/common/http';
import { SinglePostComponent } from './views/single-post/single-post.component';
import { EditPostComponent } from './views/edit-post/edit-post.component';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    AboutComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    SinglePostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PostsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
