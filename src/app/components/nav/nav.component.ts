import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  data: any[]=[];
  Rolsedes:any;
  selectedRole: any = '';
  showSedes :boolean= false

  constructor(private dataServices: DataService) { }

  ngOnInit(): void {
    this.dataServices.getData().subscribe(data=>{
      this.data=Object.values(data)
      //this.dataServices.setLocalStorage(data)
      console.log(this.data);
    });
  }
  onRoleSelected(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const selectedRole = this.data.find(value => {
      return value.id_rol === selectedValue;
    });
    this.Rolsedes = selectedRole.sedes.map((sede: { nombre_sede: string; }) => sede.nombre_sede);
    //console.log(this.Rolsedes);

    this.showSedes = true;
}





}
