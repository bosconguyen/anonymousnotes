import { Component, OnInit } from '@angular/core';
import { NoteService } from './../../note.service';
import 'rxjs'

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
    newNote: object = {note: ''}
  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }

  createNote() {
      console.log(this.newNote);
      this._noteService.createNote(this.newNote)
        .then( (success) => {
            this.newNote = {
                note: ''
            }
        })
        .catch( (err) =>{
            console.log('error');
        })
  }


}
