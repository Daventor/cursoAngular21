import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post-service';

@Component({
  selector: 'app-http',
  imports: [],
  templateUrl: './http.html',
  styleUrl: './http.css',
})
export class Http {
  protected postService = inject(PostService);

  ngOnInit(){
    //this.postService.getAll();

    //this.postService.getAllParams();

    this.postService.getAllErrors()
  }
}
