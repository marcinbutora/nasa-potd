import {Component, Input} from '@angular/core';
import {NasaApi} from "../nasa-api";

@Component({
  selector: 'app-template-image-grid',
  templateUrl: './template-image-grid.component.html',
  styleUrls: ['./template-image-grid.component.css']
})
export class TemplateImageGridComponent {
  @Input() imageThumbnails: NasaApi[] = []
  @Input() fromDate: string = ""
  @Input() toDate: string = ""

}
