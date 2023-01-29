import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/**
 * Communication service to allow components to interact with each other using known "State"
 * with subcribe items!
 */
export class DataStateService {
  private pageTitle: BehaviorSubject<string>;
  public storage: any;
  constructor() {
    this.pageTitle = new BehaviorSubject<string>('Bib Leagues App');
  }

  /**
   * Update the current nav pageTitle
   * @param {string} value: the title of the current page/component
   */
  updatePageTitle = (value: string) => {
    this.pageTitle.next(value);
  };

  /**
   * Subscribe and return to new nav pageTitle
   * @returns {Observable<string>}: An observable of the current pageTitle
   */
  getPageTitle(): Observable<string> {
    return this.pageTitle.asObservable();
  }
}