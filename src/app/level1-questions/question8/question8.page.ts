import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ScoreService } from 'src/app/score.service';
@Component({
  selector: 'app-question8',
  templateUrl: './question8.page.html',
  styleUrls: ['./question8.page.scss'],
})
export class Question8Page  {

 
  correctAnswer: string = 'choice-1';
  selectedAnswer: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router,
    private scoreService: ScoreService 

  ) {}

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  async submitAnswer() {
    if (this.selectedAnswer) {
      let header: string;
      let message: string;

      if (this.selectedAnswer === this.correctAnswer) {
        this.scoreService.incrementScore();
        header = 'Correct';
        message = 'You selected the correct answer.';
      } else {
        header = 'Incorrect';
        message = 'You selected the wrong answer.';
      }

      await this.presentAlert(header, message);
    } else {
      const alert = await this.alertController.create({
        header: 'No Answer Selected',
        message: 'Please select an answer before submitting.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
        text: 'Next Question',
        handler: () => {
          this.router.navigate(['/question9']);
        }
      },
      {
        text: 'Try Again'
      }
    ], 
      cssClass: 'custom-alert'
    });
    await alert.present();
  }

}
