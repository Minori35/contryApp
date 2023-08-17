import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {

  
  ngOnInit(): void {
    this.deboucer
    .pipe(
      debounceTime(1000)
    )
    .subscribe(value=>{
      
      this.onDebouce.emit(value)
      
    })

  }

  private deboucer  = new Subject<string>();

  @Input()
  placeHolder : string = ""

  @Output()
  public onValue = new EventEmitter<string>()

  @Output()
  public onDebouce = new EventEmitter<string>()



  emitValue(value: string){
  this.onValue.emit(value)
  }

  onKeyPress(searchTerm : string){
    this.deboucer.next(searchTerm)
  }
}
