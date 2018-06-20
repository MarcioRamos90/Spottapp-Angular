import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent {
  newAlbuns: any[] = [];
  loading: boolean = true;
  erro: boolean = false;
  erroMessage: string;
  errorStatus: string;

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.newAlbuns = data;
        this.loading = false;
      },
      errorServico => {
        console.log(errorServico);
        this.erro = true;
        this.loading = false;
        this.erroMessage = errorServico.error.error.message;
        this.errorStatus = errorServico.status;
      }
    );
  }
}
