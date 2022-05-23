import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-manage-block',
  templateUrl: './manage-block.component.html',
  styleUrls: ['./manage-block.component.scss']
})
export class ManageBlockComponent {
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  public emitEdit(event: any): void {
    this.edit.emit(event);
  }
  public emitDelete(event: any): void {
    this.delete.emit(event);
  }
}
