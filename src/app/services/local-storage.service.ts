import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify({ value }));
  }

  public getItem<T>(key: string): T | null {
    const data: string | null = localStorage.getItem(key);

    if (data !== null) {
      return JSON.parse(data).value;
    }

    return null;
  }
}
