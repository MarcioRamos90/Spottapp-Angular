import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQCW5rGBhM7BZMDZvYntJ_qfDcvmkTcp8QbFrPENAkTGzws3BRZbPyrkjBA5zNB198C9TLm-VUYxwjaM3DA"
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases").pipe(
      map(data => data["albums"].items)
    );
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQCW5rGBhM7BZMDZvYntJ_qfDcvmkTcp8QbFrPENAkTGzws3BRZbPyrkjBA5zNB198C9TLm-VUYxwjaM3DA"
    });

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map(data => data["artists"].items)
    );
  }
}
