import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  confirm(message: string): boolean {
    return window.confirm(message);
  }
}
