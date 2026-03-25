import { inject, Injectable, signal } from '@angular/core';
import { APP_SETTINGS } from '../config/app-settings';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from '../models/post-model';

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
}
