import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Address} from "../../component/addressbook/addressbook.component";


@Injectable({
  providedIn: 'root'
})

export class AddressbookService {



  constructor(
    private http:HttpClient
  ) { }


  getAllAddressBook() {
    return this.http.get<Address[]>('http://localhost:8080/all');
  }

  deleteAddressBookEntry(username, id){
      return this.http.delete(`http://localhost:8080/delete/${username}/${id}`);
  }
  // getAllAddressBook(){
  //   return this.http.get<Address[]>("http://localhost:8080/all");
  //   //console.log("Get all addressbook data by service")
  // }
}
