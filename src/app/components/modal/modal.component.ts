import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";




export interface ModalModel {
  title:string;
  message:string;
}
@Component({
  selector: 'app-modal',
    templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
  })
export class ModalComponent extends DialogComponent<ModalModel, boolean> implements ModalModel{

  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }
}
