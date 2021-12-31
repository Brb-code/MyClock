import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fechahora:any = null;
  imagenes:any=[];
  pImagen=-1;
  tiempoDefecto=30
  tiempoStatus=0
  foto:any = null
  ngOnInit(){
    this.recalcularFechaHora()
    this.cargarImagenes()
  }
  recalcularFechaHora(){
    setInterval(()=>{
      this.fechahora = new Date()
      this.tiempoStatus++
      if(this.tiempoStatus>this.tiempoDefecto || this.pImagen==-1){
        this.pImagen++
        if(this.imagenes.length==this.pImagen) this.pImagen=0
        this.tiempoStatus=0
        //Calculando tamaño
        this.foto = new Image()
        this.foto.src = this.imagenes[this.pImagen].src
        //console.log(foto.width, foto.height, foto.src)
      }
    },1000)
  }
  cargarImagenes(){
    let ruta:any = localStorage.getItem('ruta')
    console.log(ruta)
    fetch(ruta)
    .then(res=> res.json())
    .then(data=>{
      this.imagenes = []
      data.forEach((element:any) => {
        if(element) this.imagenes.push({src:element})
      });
      console.log(this.imagenes)
      
    })
  }

}
