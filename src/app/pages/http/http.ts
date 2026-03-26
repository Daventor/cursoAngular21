import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post-service';
import { Observable } from 'rxjs';
import { Post } from '../../models/post-model';
import { AsyncPipe } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  imports: [],
  templateUrl: './http.html',
  styleUrl: './http.css'
})
export class Http {
  protected postService = inject(PostService);
  obsPost$!: Observable<Post[]>;

  protected readonly postListResource = this.postService.getAllResource();

  ngOnInit(){
    //this.postService.getAll();

    //this.postService.getAllParams();

    //this.postService.getAllErrors()

    this.obsPost$ = this.postService.getAllObservable();

    this.postService.getAllInterceptorCache()
  }
}
