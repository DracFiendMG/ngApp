import { Component, EventEmitter, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos'],
  outputs: ['SelectVideo']
})
export class VideoListComponent implements OnInit {

  videos: any
  public SelectVideo = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid)
  }

}
