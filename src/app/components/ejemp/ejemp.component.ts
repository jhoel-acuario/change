import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ejemp',
  templateUrl: './ejemp.component.html',
  styleUrls: ['./ejemp.component.scss']
})
export class EjempComponent implements OnInit {
  selectedValue: any='';
  Rolsedes: any;
  selectedSede:any=''
  showSedes: boolean= false
  data: any[]=[];
  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data=>{
      this.data= data
      console.log( this.data);
    });
  }
  RoleSelected(value:any){
    const selectedValue = value;
    const selectedRole = this.data.find(value=>{
      return value.id_rol === selectedValue;
    });
    this.Rolsedes = selectedRole.sedes.map((sede: { nombre_sede: any; })=>{
      return sede
    });
    if (selectedRole.sedes.length > 0) {
      this.selectedSede = selectedRole.sedes[0].nombre_sede;
    } else {
      this.selectedSede = '';
    }
    this.showSedes= true
    console.log(this.Rolsedes);
  }
}
