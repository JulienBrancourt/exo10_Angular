import {Component, OnInit} from '@angular/core';
import {BrouetteService} from "../../utils/services/brouette.service";
import {Brouette} from "../../utils/types/brouette";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TableauComponent} from "../../components/tableau/tableau.component";

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TableauComponent
  ],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {

  constructor(private brouetteService: BrouetteService) {
    this.brouettes = brouetteService.brouettes;
  }


  brouettes: Brouette[] = [];

  brouette_form = new FormGroup({
    nom: new FormControl(''),
    description: new FormControl(''),
    prix: new FormControl(0),
    quantite: new FormControl(1),
  })

  saveBrouette() {
    if (this.brouetteService.brouettes.includes(this.brouette_form.value as Brouette)) {
      const index: number = this.brouetteService.brouettes.indexOf(this.brouette_form.value as Brouette)
      this.brouetteService.brouettes[index].quantite += this.brouette_form.value.quantite || 0;
    } else {
      this.brouetteService.brouettes.push(this.brouette_form.value as Brouette);

    }
    // localStorage.setItem('brouettes', JSON.stringify(this.brouetteService.brouettes))
  }

  delete(brouetteToDelete: Brouette) {
    const index = this.brouetteService.brouettes.indexOf(brouetteToDelete)
    this.brouetteService.brouettes.splice(index, 1);
  }

}
