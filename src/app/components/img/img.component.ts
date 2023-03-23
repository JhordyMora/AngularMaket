import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() valor = "";
  // @Input() image: string = "";
  @Output() loaded = new EventEmitter<string>();
  // counter: number =0;
  // counterFn : number | undefined;
  @Input() src = "";
  
  imgError(){
    this.src = "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" ;
  }

  imgLoaded(){
    console.log("imagen cargada, log Hijo")
    this.loaded.emit(this.src);
  }

}
