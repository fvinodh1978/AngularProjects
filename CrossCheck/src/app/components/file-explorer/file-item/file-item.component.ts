import { Component, Input } from '@angular/core';
import { FileItem } from '../../../services/file/file.model';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.css']
})
export class FileItemComponent {
  @Input() file!: FileItem;
}
