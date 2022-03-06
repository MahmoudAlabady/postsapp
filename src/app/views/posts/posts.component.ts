import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interfaces/postsModel';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:Posts[]=[]
  constructor(private postsService:PostsService) { }
getPosts(){
  this.postsService.getPosts().subscribe(
    {
      next:(res:any)=>{
        // console.log(res);
        this.posts =res;
      },
      error:(httpError:any)=>{
        console.log(httpError);
      }
    }
  )
}
addPost(post:Posts){
this.postsService.addPosts(post).subscribe({
  next:()=>{
    this.posts.splice(0,0,post)
  }
})
}
deletePosts(post:Posts){
this.postsService.deletePosts(post.id).subscribe({
  next: ()=>{
   let index = this.posts.indexOf(post);
   
  this.posts.splice(index,1);
  }
})
}
  ngOnInit(): void {
    this.getPosts()
  }

}
