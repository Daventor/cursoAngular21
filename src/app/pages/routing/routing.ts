import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-routing',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './routing.html',
  styleUrl: './routing.css',
})
export class Routing {
  private router = inject(Router);

  private route = inject(ActivatedRoute); 

  navigateTo(){
    //this.router.navigate(['/routing/info']);

    //this.router.navigate(['/routing/detail', 44]);

    // this.router.navigate(['/routing/review'], {
    //   queryParams: { category: 'books', sort: 'price'}
    // })

    //this.router.navigate(['/routing/review', {featured: true, onSale: true}]);

    // this.router.navigate(['review'], {
    //    relativeTo: this.route
    //  })

    //this.router.navigateByUrl('routing/info');

    this.router.navigateByUrl('routing/info', {browserUrl: '/product/lalala'});
  }
}
