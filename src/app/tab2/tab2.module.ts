import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { SentenceMissingWordComponent } from '../sentence-missing-word/sentence-missing-word.component';
import { VerbConjugationComponent } from '../verb-conjugation/verb-conjugation.component';
import { SingleVerbConjugationComponent } from '../single-verb-conjugation/single-verb-conjugation.component';
import { CorrectIncorrectComponent } from '../correct-incorrect/correct-incorrect.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
  ],
  declarations: [Tab2Page, SentenceMissingWordComponent, VerbConjugationComponent, SingleVerbConjugationComponent, CorrectIncorrectComponent]
})
export class Tab2PageModule {}
