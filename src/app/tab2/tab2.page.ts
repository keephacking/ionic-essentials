import { Component } from "@angular/core";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  cards: any = [];

  constructor() {
    for (let i = 0; i < 25; i++) {
      let card = {
        Name: "Nine Inch Nails Live",
        Description: "The most popular industrial group ever, and largely responsible for bringing the music to a mass audience."
      };
      this.cards.push(card);
    }
  }

  onTopClick() {
    alert("TOP");
  }
}
