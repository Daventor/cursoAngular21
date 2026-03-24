import { Component, contentChild, ElementRef, viewChild, viewChildren } from '@angular/core';

@Component({
  selector: 'app-class-referencing',
  imports: [],
  templateUrl: './class-referencing.html',
  styleUrl: './class-referencing.css',
})
export class ClassReferencing {
 // viewQuerys | ContentQuerys

//  searchInput = viewChild<ElementRef<HTMLInputElement>>('search');
searchInput = viewChild.required<ElementRef<HTMLInputElement>>('search');

items = ['A', 'B', "C"];

listItems = viewChildren<ElementRef<HTMLLIElement>>('item');

 ngAfterViewInit(){
  //this.searchInput()?.nativeElement.focus();

  this.listItems().forEach(el => {
    console.log(el.nativeElement.textContent);
    
  })
 }

 title = contentChild<ElementRef<HTMLHeadingElement>>('title');

 ngAfterContentInit(){
  console.log(this.title()?.nativeElement.textContent);
  
 }
}
