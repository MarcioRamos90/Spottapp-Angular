import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Pipe({
  name: "domSeguro"
})
export class DomSeguroPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeResourceUrl {
    const url = "https://open.spotify.com/embed?uri=";
    return this.sanitizer.bypassSecurityTrustResourceUrl(url + value);
  }
}
