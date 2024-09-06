import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Brouette} from "../../utils/types/brouette";

@Component({
  selector: 'app-tableau',
  standalone: true,
  imports: [],
  templateUrl: './tableau.component.html',
  styleUrl: './tableau.component.css'
})
export class TableauComponent {

@Input() brouettes: Brouette[] = [];

@Output() clickButton = new EventEmitter<Brouette>;

onClick (brouette: Brouette) {
  this.clickButton.emit()
  console.log(`Tableau - brouettes: ${JSON.stringify(this.brouettes)}`)
  console.log(`Tableau - brouette: ${brouette}`)
  console.log(`Tableau - index brouette: ${this.brouettes.indexOf(brouette)}`)

}

}
