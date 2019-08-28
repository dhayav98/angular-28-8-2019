import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { UploadService } from '../service/upload.service';

@Component({
  selector: 'app-import-stock-page',
  templateUrl: './import-stock-page.component.html',
  styleUrls: ['./import-stock-page.component.css']
})
export class ImportStockPageComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
   constructor(private uploadService: UploadService) {}
 selectFile(event) {
   this.selectedFiles = event.target.files;
 }

  ngOnInit() {
  }
  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        alert("file uploaded successfully!!");

      }
    });
    this.selectedFiles = undefined;
  }
  }


