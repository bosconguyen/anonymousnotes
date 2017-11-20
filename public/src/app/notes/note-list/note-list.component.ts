import { Component, OnInit } from '@angular/core';
import { NoteService } from './../../note.service';
import 'rxjs'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

notes: Array<any>;

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
      this._noteService.getAllNotes()
        .then( (notes) => this.notes = notes)
        .catch( (err) => console.log(err))
  }

}
