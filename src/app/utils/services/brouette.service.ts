import { Injectable } from '@angular/core';
import {Brouette} from "../types/brouette";

@Injectable({
  providedIn: 'root'
})
export class BrouetteService {

  brouettes: Brouette[] = [];
  brouettePanier: Brouette[] = [];

  constructor() {
    const stored = localStorage.getItem('brouettes');
    if(stored) {
      this.brouettes = JSON.parse(stored)
    }
  }

  addBrouette(brouette: Brouette) {
    this.brouettes.push(brouette);
    localStorage.setItem('brouettes', JSON.stringify(this.brouettes))
  }



}
