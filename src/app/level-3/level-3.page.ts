import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level3',
  templateUrl: './level-3.page.html',
  styleUrls: ['./level-3.page.scss'],
})
export class Level3Page  {

 imageSrc1 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g-1.png';
 imageSrc2 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g2.png';
 imageSrc3 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g3.png';
 imageSrc4 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g4.png';
 imageSrc5 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g5.png';
 imageSrc6 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g6.png';
 imageSrc7 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g7.png';
 imageSrc8 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g8.png';
 imageSrc9 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g9.png';
 imageSrc10 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g10.png';

 newImageSrc1 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g-1.png';
 newImageSrc2 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g-2.png';
 newImageSrc3 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g-3.png';
 newImageSrc4 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g-4.png';
 newImageSrc5 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g-5.png';
 newImageSrc6 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g-6.png';
 newImageSrc7 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g-7.png';
 newImageSrc8 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g-8.png';
 newImageSrc9 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g-9.png';
 newImageSrc10 = '../assets/AlgebraQuest_Asset/lvl-buttons//lvl3-buttons/g-10.png';
  

changeImage(event:Event, buttonId: number){
  const target = event.target as HTMLImageElement;
      switch (buttonId) {
        case 1:
          target.src = this.newImageSrc1;
          break;
        case 2:
          target.src = this.newImageSrc2;
          break;
        case 3:
          target.src = this.newImageSrc3;
          break;
        case 4:
          target.src = this.newImageSrc4;
          break;
        case 5:
          target.src = this.newImageSrc5;
          break;
        case 6:
          target.src = this.newImageSrc6;
          break;
        case 7:
          target.src = this.newImageSrc7;
          break;
        case 8:
          target.src = this.newImageSrc8;
          break;
        case 9:
          target.src = this.newImageSrc9;
          break;
        case 10:
          target.src = this.newImageSrc10;
          break;
        default:
          break;
    }
  }
  playButton(){
    let audio = new Audio();
    audio.src = "../assets/audio/button-124476.mp3";
    audio.load();
    audio.play();
   }
}
