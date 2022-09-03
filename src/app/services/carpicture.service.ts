import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarpictureService {

  private pictureSource = new BehaviorSubject<string>('');

  source = this.pictureSource.asObservable()

  constructor() { }

  changePicture(source: string) {
    this.pictureSource.next(source);
  }
}
