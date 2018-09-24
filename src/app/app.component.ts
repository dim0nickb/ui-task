import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**Active Tab */
  selectedIndex = 0;

  key = 'ui-task-selectedIndex';

  OnSelectedIndexChange(idx: number): void {
    localStorage.setItem(this.key, idx.toString());
  }

  ngOnInit(): void {
    const selectedIndex = localStorage.getItem(this.key);
    if (selectedIndex && selectedIndex.length) {
      this.selectedIndex = +selectedIndex;
    }
  }


}
