import { Component } from "@angular/core";
import { UserNoteService } from "../usernote.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private usernoteService: UserNoteService) {
    this.results = this.usernoteService.getAllNote();
  }
  results: Observable<any>;
  formAddStatus = false;
  userNote: string;
   
  openToDoFormforSaving() {
    this.formAddStatus = true;
  }
  saveUserNote() { 
    this.formAddStatus = false; 
    this.usernoteService.saveUserNote(this.userNote); 
  }
}
