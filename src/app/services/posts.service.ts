import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../interfaces/postsModel';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url='https://jsonplaceholder.typicode.com/posts/';
  constructor(private http:HttpClient) { }
getPosts(){
  // console.log(this.http.get<Posts[]>(this.url))
  return this.http.get<Posts[]>(this.url)
}
getSinglePost(id:any){
  // console.log(this.http.get<Posts>(this.url +id));
  return this.http.get<Posts>(this.url+ id)
  
}
addPosts(data:Posts){
  return this.http.post(this.url,data);
}
deletePosts(id:any){
return this.http.delete(this.url+id)
}
updatePost(id:any,data:any){
  return this.http.patch(this.url+id,data)
}

}
