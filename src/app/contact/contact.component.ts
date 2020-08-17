import { Component, OnInit } from '@angular/core';
import { Contact} from './contact';
import { ContactService} from './contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
model= new Contact()
 submitted=false;
msg1:String;
err:String;
constructor( private contactService:ContactService) { }

  ngOnInit() {
  }
  onDataSave()
  {
    this.submitted=true;
    //console.log(this.model);
   this.contactService.save_contact_data(this.model).subscribe(
     res=>this.msg1='Send successfully',
     err=>this.err='No save'
   ) ;
    
  }

}
