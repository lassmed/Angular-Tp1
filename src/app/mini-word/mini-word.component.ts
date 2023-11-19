import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent {
  textColor: string = 'black';
  fontSize: number = 16;
  fontFamily: string = 'Arial';

  get paragraphStyles() {
    return {
      'color': this.textColor,
      'font-size.px': this.fontSize,
      'font-family': this.fontFamily,

    };
  }

  updateStyles(): void {
    //styles are modifed by the user ( data biding )
  }
}
