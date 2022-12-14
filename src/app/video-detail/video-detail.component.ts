import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video'],
  outputs: ['updateVideoEvent', 'deleteVideoEvent']
})
export class VideoDetailComponent implements OnInit {

  editTitle: boolean = false
  video: any
  private updateVideoEvent = new EventEmitter()
  private deleteVideoEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.editTitle = false
  }

  onTitleClick() {
    this.editTitle = true
  }

  updateVideo() {
    this.updateVideoEvent.emit(this.video)
  }

  deleteVideo() {
    this.deleteVideoEvent.emit(this.video)
  }

}
