import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserResource {
  constructor(
    private readonly http: HttpClient
  ) {}

  checkPlate (plate: any) {
    return this.http.post<any>('/api/VERIFYLOGON', {
      vehiclePlate: plate,
    });
  }


}
