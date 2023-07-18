import { Component ,Input,Output ,EventEmitter} from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  display:any ;
  constructor(private servise :ServiceService){
 
   this.servise.displayData().subscribe((response)=> this.display = response);
 
  }
  



}
