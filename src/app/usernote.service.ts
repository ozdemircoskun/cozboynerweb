import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserNoteService {
  constructor(private http: HttpClient) {}

  url = "https://localhost:54207/";
  getAllNote() {
   const requesturl = this.url + "usernote-getall"; 
    return this.http.get(`${requesturl}`);
  }
  saveUserNote(note: string) {
    const requesturl = this.url + "usernote-insert"; 
     this.http.post(requesturl, {Description:note}).subscribe(res => console.log(res)); 
  }
}
