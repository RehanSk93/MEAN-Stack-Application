import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  form: FormGroup;
  imagePreview: any;
  private mode = 'create';
  private postID: string;

  // Validation methods
  get titleValidation() {
    return this.form.controls.title;
  }

  constructor(private postsService: PostsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // Initializing the form
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(3)] ),
      content: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required])
    });

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
              this.form.setValue({
                title: this.updatePost.title,
                content: this.updatePost.content
              });
            });
      } else {
        this.mode = 'create';
        this.postID = null;
      }
    });
  }

  // Pick the image from the input field
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();

    // Image preview code
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }

    // load spinner
    this.isLoading = true;

    // Check mode first.......
    if (this.mode === 'create') {
      this.postsService.addPost(this.form.value.title, this.form.value.content);
    } else {
      this.postsService.updatePost( this.postID, this.form.value.title, this.form.value.content );
    }
    this.form.reset();
  }

}
