import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/interfaces/postsModel';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post:Posts={}
  constructor(private postsService:PostsService,private route:ActivatedRoute) { }
 id:string= this.route.snapshot.params['id']
  getSinglePost(){
    this.postsService.getSinglePost(this.id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.post = res;
      }
    })
  }
  updatePost(post:Posts){
    this.postsService.updatePost(this.id,post).subscribe({
      
    })
  }
  ngOnInit(): void {
    this.getSinglePost()
  }

}
