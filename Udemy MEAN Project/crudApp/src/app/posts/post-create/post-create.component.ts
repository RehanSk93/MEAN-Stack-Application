import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';

import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  updatePost: Post;
  isLoading = false;
  private mode = 'create';
  private postID: string;

  constructor(private postsService: PostsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postID = paramMap.get('postId');
        this.isLoading = true;
        this.postsService.getSinglePost(this.postID)
            .subscribe((responseData) => {
              this.isLoading = false;
              this.updatePost = {
                id: responseData._id,
                title: responseData.title,
                content: responseData.content
              };
            });
      } else {
        this.mode = 'create';
        this.postID = null;
      }
    });
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    // load spinner
    this.isLoading = true;

    // Check mode first.......
    if (this.mode === 'create') {
      this.postsService.addPost(form.value.title, form.value.content);
    } else {
      this.postsService.updatePost( this.postID, form.value.title, form.value.content );
    }
    form.resetForm();
  }

}
