import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Apple {
  AppleNum: number;
  Color: string;
  Size: number;
  Rightfullness: number;
  x_position: number;
  y_position: number;
}

@Injectable()
export class ApplesDataService {
  applesUrl = 'api/v1/apple';
  constructor(private http: HttpClient) { }

  getApples() {
    return this.http.get<Array<Array<Apple>>>(this.applesUrl);
  }

}
