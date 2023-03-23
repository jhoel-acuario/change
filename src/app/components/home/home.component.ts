import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  open: boolean= true;
  constructor() { }

  @Output() toggleSidebarForMe: EventEmitter<boolean> = new EventEmitter;
  ngOnInit(): void {
  }
  close(){
    this.toggleSidebarForMe.emit()
  }
  Cerrar(){
    this.open =! this.open

  }
}
