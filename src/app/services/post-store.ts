import { computed, inject, Injectable, signal } from "@angular/core";
import { PostService } from "./post-service";
import { Post } from "../models/post-model";
import { toObservable } from "@angular/core/rxjs-interop";
import { finalize } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class PostStore{

    postsService = inject(PostService);

    // Estados
    private readonly _posts = signal<Post[]>([]);
    private readonly _loading = signal(false);
    private readonly _error = signal<string | null>(null)

    readonly posts = this._posts.asReadonly();
    readonly loading = this._loading.asReadonly();
    readonly error = this._error.asReadonly();

    readonly posts$ = toObservable(this._posts);
    readonly loading$ = toObservable(this._loading);

    readonly postCount = computed(() => this._posts().length);

    postById = (id:number) => computed(() => this._posts().find(p => p.id === id))

    hasPost(id: number): boolean{
        return this._posts().some(p => p.id === id)
    }

    loadAll(){
        this._loading.set(true);
        this._error.set(null);

        this.postsService
        .getAllStore()
        .pipe(finalize(() => this._loading.set(false)))
        .subscribe({
            next: posts => this._posts.set(posts),
            error: () => this._error.set('Error cargando posts')
        })
    }

    update(post: Post): void {
        this.postsService.update(post).subscribe({
        next: updated =>
            this._posts.update(posts =>
                posts.map(p => (p.id === updated.id ? updated : p))
            ),
        error: () => this._error.set('Error updating post'),
        });
    }

    delete(id: number): void {
        this.postsService.delete(id).subscribe({
        next: () =>
            this._posts.update(posts =>
            posts.filter(p => p.id !== id)
            ),
        error: () => this._error.set('Error deleting post'),
        });
  }
}