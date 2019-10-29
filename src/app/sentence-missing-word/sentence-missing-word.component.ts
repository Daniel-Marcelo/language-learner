import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentence-missing-word',
  templateUrl: './sentence-missing-word.component.html',
  styleUrls: ['./sentence-missing-word.component.scss'],
})
export class SentenceMissingWordComponent implements OnInit {

  private sentence = new Array<string>();
  private missingWord = '';
  private answerIsCorrect = false;
  private isTabClicked = false;

  constructor() { }

  ngOnInit() {
    this.sentence = ['My', 'Name', 'is', 'Daniel'];
    this.missingWord = 'name';
  }

  private isMissingWord(word): boolean {
    return word.toUpperCase() === this.missingWord.toUpperCase();
  }

  onKey(event: any) {
    console.log(event);
    this.isTabClicked = true;
    this.answerIsCorrect = this.isMissingWord(event.srcElement.value);
  }
}
