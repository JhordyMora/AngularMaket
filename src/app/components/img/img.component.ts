import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() valor:String = "";
  @Input() image: String = "";
  @Output() loaded = new EventEmitter<String>();
  
  imgError(){
    this.image = "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" ;
  }

  imgLoaded(){
    console.log("imagen cargada, log Hijo")
    this.loaded.emit(this.image);
  }
}
