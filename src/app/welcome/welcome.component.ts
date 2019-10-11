import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from "../service/data/welcome-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

message = 'Some Welcome Message';
name = '';
welcomeMessageFromService:String;

  // ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService  ) { }

  ngOnInit() {

    // console.log(this.message)
    // console.log(this.route.snapshot.params['name'])

    this.name = this.route.snapshot.params.name;

  }

  getWelcomeMessageWithParameter() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }




  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    // console.log("Get Welcome Message");
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
    //console.log(response)
    //console.log(response.message);
  }

  private handleErrorResponse(error: any) {
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);

    this.welcomeMessageFromService = error.error.message;

  }

}

