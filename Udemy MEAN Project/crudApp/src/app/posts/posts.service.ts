import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from './post.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  readonly postURL = 'http://localhost:3000/post';

  constructor(private http: HttpClient,
              private router: Router) { }

  // get all post and showing
  getPosts() {
    this.http.get<{message: string, post: any[]}>(this.postURL)
    .pipe(map((resData) => {
      return resData.post.map((responsePost) => {
        return {
          title: responsePost.title,
          content: responsePost.content,
          id: responsePost._id
        };
      });
    }))
    .subscribe((transformPostData) => {
      this.posts = transformPostData;
      this.postsUpdated.next([...this.posts]);
    });
  }

  // get post listener for rxjs
  getPostListener() {
    return this.postsUpdated.asObservable();
  }

  // get single post for displaying
  getSinglePost(id: string) {
    return this.http.get<{_id: string, title: string, content: string}>(this.postURL + `/${id}`);
  }

  // Update post to the server
  updatePost(id: string, title: string, content: string) {
    const postDetails =  { id, title, content };
    this.http.put(this.postURL + `/${postDetails.id}`, postDetails)
        .subscribe((responseData) => {
          console.log(responseData);
          this.router.navigate(['/']);
        });
  }

  // send post data to server
  addPost(title: string, content: string) {
    const post: Post = { id: null, title, content };
    this.http.post<{ message: string, postId: string }>(this.postURL, post)
      .subscribe((responseData) => {
        const id = responseData.postId;
        post.id = id;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(['/']);
      });
  }

  // delete post
  deletePost(postId: string) {
    this.http.delete(this.postURL + `/${postId}`)
      .subscribe((responseData) => {
        const updatedPost = this.posts.filter(allPost => allPost.id !== postId);
        this.posts = updatedPost;
        this.postsUpdated.next([...this.posts]);
      });
  }

}
