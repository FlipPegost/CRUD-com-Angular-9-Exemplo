import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  public texto:string 
  
  ngOnInit(): void {
    this.texto = "toggle_off"
  }
  clicou(){
    if (this.texto == "toggle_off")
    {
      this.texto = "toggle_on"
    }else {
      this.texto ="toggle_off"
    }
  }
  
}
