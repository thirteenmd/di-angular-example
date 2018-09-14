import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../services/simple-service.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
  viewProviders: [SimpleService], //service.value will not be shared with child components of this component, everything will be encapsulated here
  // providers: [SimpleService] //when removed all the parent components will have the same instance of service, therefore the service.value will be one for all
})
export class ParentComponentComponent implements OnInit {

  constructor(private service: SimpleService) { }

  ngOnInit() {
  }

}
