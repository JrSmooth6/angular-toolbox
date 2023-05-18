import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicationService {
  private componentInitSubject = new Subject<void>();
  componentInit$ = this.componentInitSubject.asObservable();
  triggerComponentInit() {
    console.log(localStorage.getItem('lang'))
    this.componentInitSubject.next();
  }
}
