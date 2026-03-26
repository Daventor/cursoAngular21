import { inject, Injectable, signal } from '@angular/core';
import { APP_SETTINGS } from '../config/app-settings';
import { HttpClient, HttpContext, HttpEventType, HttpHeaders, HttpParams, httpResource, HttpResourceRef } from '@angular/common/http';
import { Post } from '../models/post-model';
import { Observable } from 'rxjs';
import { CACHING_ENABLED } from '../core/interceptors/caching-interceptor';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private appConfig = inject(APP_SETTINGS);

  private http = inject(HttpClient);

  posts = signal<Post[] | null>([]);

  getAll(){
    this.http.get<Post[]>(`${this.appConfig.apiUrl}/posts`, {
      responseType: 'json'
    }).subscribe((posts: Post[]) => {
      console.log(posts);

      this.posts.set(posts);
      
    })
  }

  getAllParams(){
    const baseParams = new HttpParams()
    .set('filter', 'lalala')
    .set('order', 'lelele')
  
    const baseHeaders = new HttpHeaders().set('X-DEbug-Leve', 'minimal');

    this.http.get<Post[]>(`${this.appConfig.apiUrl}/posts`, {
      // params: {
      //   filter: "all",
      //   page: 1
      // }
      params: baseParams.set('page', 12),
      headers: baseHeaders.set('X-DEbug-Leve', 'verbose'),
      observe: 'response'
      }
    ).subscribe((res) =>{
      console.log(res.status);
      console.log(res.body)

      this.posts.set(res.body)
    })
  }

  create(post: Post){
    this.http.post<Post>(`${this.appConfig.apiUrl}/posts`, post).subscribe((post: Post)=>{
      console.log(post);
    });
  }

  uploadProgress(bigData: Blob){
    this.http.post<Post>(`${this.appConfig.apiUrl}/postsNOVALID`, bigData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe((event) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          console.log('Uploaded ' + event.loaded + ' out of '+ event.total + ' bytes');
          break;
      
        case HttpEventType.Response:
          console.log("Finished uploading");
          
          break;
        default:
          break;
      }
    })
  }

  getAllErrors(){
    const baseUrl =  `${this.appConfig.apiUrl}/posts`;
    const urlDelay = 'https://httpbin.org/delay/4000';

    this.http.get<Post[]>(urlDelay, { timeout: 3000 }).subscribe({
      next: (posts: Post[]) => {
        console.log(posts);
        this.posts.set(posts);
        
      },
      error: (err) => {
        console.error("Error: ", err);
      }
    });
  }

  trackPageExit(data: unknown){
    this.http.post('/api/analytics', data, { keepalive: true }).subscribe();
  }

  getAllObservable(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.appConfig.apiUrl}/posts`);
  }

  getAllResource(): HttpResourceRef<Post[] | undefined> {
    return httpResource<Post[]>(() => `${this.appConfig.apiUrl}/posts`);
  }

  getAllInterceptorCache(){
    return this.http.get<Post[]>(`${this.appConfig.apiUrl}/posts`, {
      context: new HttpContext().set(CACHING_ENABLED, true)
    }).subscribe((posts: Post[]) => {
      console.log(posts);

      this.posts.set(posts);
      
    })
  }

    getAllStore(): Observable<Post[]> {
      return this.http.get<Post[]>(`${this.appConfig.apiUrl}/posts`);
    }

    createStore(post: Omit<Post, 'id'>): Observable<Post> {
      return this.http.post<Post>(`${this.appConfig.apiUrl}/posts`, post);
    }

      update(post: Post): Observable<Post> {
        return this.http.put<Post>(`${this.appConfig.apiUrl}/${post.id}`, post);
      }

      delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.appConfig.apiUrl}/${id}`);
      }
}
