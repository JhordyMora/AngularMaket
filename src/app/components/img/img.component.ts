import { Component, Input, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnDestroy{
  @Input() valor:String = "";
  // @Input() image: String = "";
  @Output() loaded = new EventEmitter<String>();
  // counter: number =0;
  // counterFn : number | undefined;
  @Input() src: String = "";
  
  imgError(){
    this.src = "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" ;
  }

  imgLoaded(){
    console.log("imagen cargada, log Hijo")
    this.loaded.emit(this.src);
  }

  ngOnInit(): void {
      // this.counterFn = window.setInterval(()=>{
      //   this.counter+=1;
      //   console.log("run counter");
      // },1000)
  }

  ngOnDestroy(): void {
  //   console.log("ngOnDestroy");
  //   window.clearInterval(this.counterFn);
  //   console.log("evento parado")
  }
}
