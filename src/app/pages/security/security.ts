import { Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-security',
  imports: [],
  templateUrl: './security.html',
  styleUrl: './security.css',
})
export class Security {
  bio = '<img src=x onerror="alert(\'XSS\')" />';

  sanitizer = inject(DomSanitizer);
  safeBio = this.sanitizer.bypassSecurityTrustHtml(this.bio);

  userProvideUrl = 'javascript:alert("XSS")';

  videoUrl = 'http://www.youtube.com/embed/xyz';
  safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/xyz')

   
  userColor = 'url(javascript:alert(1))';
  safeUserColor = this.sanitizer.bypassSecurityTrustStyle(this.userColor);

  el = inject(ElementRef);
  userInput =  '<img src=x onerror="alert(\'XSS\')" />';

  renderer = inject(Renderer2);

  ngOnInit(){
    //this.el.nativeElement.innerHTML = this.userInput;

    this.renderer.setProperty(this.el, 'textContent', this.userInput);
  }
  /**
   providers: [
    { provide: CSP_NONCE, useValue: 'r4nd0m'}
   ]

     // provideHttpClient(
  //   withXsrfConfiguration({
  //     cookieName: 'MY-XSRF',
  //     headerName: 'X-MY-XSRF'
  //   })
  // );
   */
}
