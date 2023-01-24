import { Component } from '@angular/core';
import { MatListOption, MatSelectionList } from '@angular/material/list';

class Option {
  constructor(
    public label: string,
    public selected: boolean
  ) {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mat-selection-list';

  public options: Option[] = [
    new Option('Option 1', false),
    new Option('Option 2', true),
    new Option('Option 3', false)
  ]

  public updateOptions(): void {
    this.options = [
      new Option('Option 1', false),
      new Option('Option 2', true),
      new Option('Option 3', false),
      new Option('Option 4', false),
    ];
  }
}
