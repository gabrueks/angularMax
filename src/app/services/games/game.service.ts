import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addGame(name, price){
    let obj = {
      name: name,
      price: price
    };
    this.http.post(`${this.url}/add`, obj)
      .subscribe();
  }

  getGames(){
    return this.http.get(`${this.url}`)
  }

  editGame(id){
    return this.http.get(`${this.url}/edit/${id}`);
  }

  updateGame(name, price, id) {
    return new Promise((resolve) => {
      const obj = {
        name: name,
        price: price
      }
      this
        .http
        .put(`${this.url}/update/${id}`, obj)
        .subscribe(() => resolve())
      })
    }

    deleteGame(id){
      return this.http.get(`${this.url}/delete/${id}`)
    }
}
