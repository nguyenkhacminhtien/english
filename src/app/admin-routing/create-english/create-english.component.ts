import { Component } from '@angular/core';
import { HttpApiService } from '../../Service/http-api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-english',
  templateUrl: './create-english.component.html',
  styleUrls: ['./create-english.component.css']
})
export class CreateEnglishComponent {
  constructor(
      private httpClear : HttpApiService,
      private routes: Router,
      private route: ActivatedRoute
    ) {}

   public wordLuckValue : string = '';
   public grammarValue : string = '';
   public translationValue : string = '';



   public saveData() {
    const data = {
      wordLuck: this.wordLuckValue,
      grammar: this.grammarValue,
      translation: this.translationValue
    };
      this.httpClear.createEnglish(data).subscribe(data => {
      console.log('data', data);
      this.routes.navigate(['ListEnglish']);
     })
   }
}
