import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQBzWVgwGM22t1OfbP-DwDmUezWOjgg66luotw_eEeYVegoevuguTY9OEPxYCsB-i9xiPtA2gVj9iQ88iYo"
    });

    this.http
      .get("https://api.spotify.com/v1/browse/new-releases", { headers })
      .subscribe(data => {
        console.log(data);
      });
  }
}
