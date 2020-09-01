import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  public variable: string = 'Magdalena';

  constructor() { }

  returnString() {
    return this.variable;
  }
}
