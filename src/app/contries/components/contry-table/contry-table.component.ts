import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'contry-table',
  templateUrl: './contry-table.component.html',
  styles: [
  ]
})
export class ContryTableComponent {

  @Input()
  public countries : Country[]= [];


}
