import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/interfaces/postsModel';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
posts:Posts={}
  constructor(private postsService:PostsService,private route:ActivatedRoute,private router:Router ) { }
id:string= this.route.snapshot.params['id']
  

  getSinglePost(){
    this.postsService.getSinglePost(this.id).subscribe(
      {
        next:(res:any)=>{
          console.log(res);
          this.posts = res;

        }
      }
    )
  }
  back(){
this.router.navigate(['/posts'])
  }
  ngOnInit(): void {
    this.getSinglePost()
  }

}
