import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NoteService } from './note.service';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { CreateNoteComponent } from './notes/create-note/create-note.component';
import { NoteListComponent } from './notes/note-list/note-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    CreateNoteComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
