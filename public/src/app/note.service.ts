import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'


@Injectable()
export class NoteService {

  constructor(private _http: Http) { }

  createNote(note){
      console.log(note);
      return this._http.post('/api/notes', note)
      .map(Response=>Response.json()).toPromise()
  }

  getAllNotes(){
    console.log('getting notes');
    return this._http.get('/api/notes')
    .map(Response=>Response.json()).toPromise()
  }

}
