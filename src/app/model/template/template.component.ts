import {Component, Input} from '@angular/core';
import {NasaApi} from "../nasa-api";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  @Input() dataFromApi: NasaApi | undefined

}
