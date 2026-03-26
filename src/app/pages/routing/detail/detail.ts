import { Component, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../models/post-model';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
  readonly id = input<string>('');

  private router = inject(Router)
  private route = inject(ActivatedRoute);

  readId = signal('');

  constructor(){
    console.log(this.route);
    
    this.route.params.subscribe((params) => {
      this.readId.set(params['id']);
    })

    this.route.queryParams.subscribe((params) => {
      const sort = params['sort'] || 'price';
      console.log(sort);
      
    })
  }

  updateSort(event: Event){
    const sort = (event.target as HTMLSelectElement).value;

    this.router.navigate([], {
      queryParams: {sort},
      queryParamsHandling: 'merge'
    })
  }

  // Resolver de posts
  posts = this.route.snapshot.data['posts'] as Post[]; 
}
