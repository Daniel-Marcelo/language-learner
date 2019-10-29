import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentence-missing-word',
  templateUrl: './sentence-missing-word.component.html',
  styleUrls: ['./sentence-missing-word.component.scss'],
})
export class SentenceMissingWordComponent implements OnInit {

  private sentence = new Array<string>();
  private missingWord = '';

  constructor() { }

  ngOnInit() {
    this.sentence = ['My', 'Name', 'is', 'Daniel'];
    this.missingWord = 'name';
  }

  private isMissingWord(word): boolean {
    return word.toUpperCase() === this.missingWord.toUpperCase();
  }

}
