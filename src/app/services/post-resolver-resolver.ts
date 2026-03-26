import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PostStore } from './post-store';
import { combineLatest, filter, map, take } from 'rxjs';
import { Post } from '../models/post-model';

export const postResolverResolver: ResolveFn<Post[]> = (route, state) => {
  const store = inject(PostStore);

  store.loadAll();



  //  return store.posts$.pipe(
  //    filter(posts => posts.length > 0),
  //   take(1)
  // );


 return combineLatest([
   store.posts$,
   store.loading$
 ]).pipe(
  filter(([_, loading]) => !loading),
  map(([posts]) => posts),
  take(1)
 )

};
