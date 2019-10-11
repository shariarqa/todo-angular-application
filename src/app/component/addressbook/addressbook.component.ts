import { Component, OnInit } from '@angular/core';
import {AddressbookService} from '../../service/data/addressbook.service';


export class Address{
  constructor(
    public id: string,
    public name: string,
    public phone: string
  ){

  }
}


@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.css']
})


export class AddressbookComponent implements OnInit {


  responsemessage: String[];
  address: Address[];
  message: string;

  constructor(private addressservice: AddressbookService,
              ) { }

  ngOnInit() {


  }

  getalladdressess(){
    this.addressservice.getAllAddressBook().subscribe(
      response => {
        console.log(response);
        this.address = response;
        this.handleSuccessfulResponse(response);
      }
    )
  }

  handleSuccessfulResponse(response){
    this.responsemessage = response;
  }

  refreshAddress(){
    this.addressservice.getAllAddressBook().subscribe(
      response => {
        console.log(response);
        this.address = response;
      }
    );
  }


  deleteAddress(id) {
    console.log(`Delete Address ${id}`);
    this.addressservice.deleteAddressBookEntry('Rana', id).subscribe(

      respons => {
        console.log(respons);
        this.message = `Delete of Todo ${id}Successful`;
        this.refreshAddress();

      }

    );

  }


}
