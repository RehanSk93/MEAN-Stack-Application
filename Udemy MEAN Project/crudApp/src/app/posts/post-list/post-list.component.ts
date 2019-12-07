import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  // list of posts
  posts: Post[] = [];
  isLoading = false;
  private postSubscription: Subscription;


  constructor(private postsService: PostsService) { }

  // get all posts list and store it...
  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postSubscription = this.postsService.getPostListener().subscribe((result: Post[]) => {
      this.posts = result;
      this.isLoading = false;
    });
  }

  // deleting post
  onDeleted(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
