import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Set } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SetsService {
  #http = inject(HttpClient);

  getSets() {
    const url = '/data/sets.json';

    return this.#http.get<Set[]>(url);
  }
}
