import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _getUrl = "/api/videos"
  private _postUrl = "/api/video"
  private _putUrl = "/api/video/"
  private _deleteUrl = "/api/video/"

  constructor(private _http: HttpClient) { }

  getVideos(): Observable<Video> {
    return this._http.get<Video>(this._getUrl)
  }

  addVideo(video: Video) {
    let headers = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

    return this._http.post(this._postUrl, JSON.stringify(video), headers)
  }

  updateVideo(video: Video) {
    let headers = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

    return this._http.put(this._putUrl + video._id, JSON.stringify(video), headers)
  }

  deleteVideo(video: Video) {
    return this._http.delete(this._deleteUrl + video._id)
  }

  //let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
  
}
