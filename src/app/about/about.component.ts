import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as $ from 'jquery';
import 'bootstrap';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = '';
  }

  openModal() {
    debugger
    // set the video URL and sanitize it
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/OPWpUgCMtjk?autoplay=1');

    // use jQuery to trigger the modal
    $('#videoModal').modal('show');

    // Listen to modal close event
    $('#videoModal').on('hidden.bs.modal', () => {
      this.videoUrl = '';  // reset the video URL to stop the video playback
    });
  }
}
