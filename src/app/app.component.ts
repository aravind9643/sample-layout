import { Component, ChangeDetectorRef } from "@angular/core";
import * as $ from "jquery";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}
}
