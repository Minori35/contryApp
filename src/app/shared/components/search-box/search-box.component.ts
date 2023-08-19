import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{
  
  private deboucer  = new Subject<string>();

  private debouncerSuscription? : Subscription;
  
  @Input()
  initialValue : string = ""

  @Input()
  placeHolder : string = ""

  @Output()
  public onValue = new EventEmitter<string>()

  @Output()
  public onDebouce = new EventEmitter<string>()
  
  ngOnInit(): void {
    this.debouncerSuscription=this.deboucer
    .pipe(
      debounceTime(300)
      )
      .subscribe(value=>{
        
      this.onDebouce.emit(value)
      
    })

    
  }

    ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();    
    }

  onKeyPress(searchTerm : string){
    this.deboucer.next(searchTerm)
  }
}
