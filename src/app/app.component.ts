import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  load$ = new BehaviorSubject<boolean>(false);
  loading = false;
  letterCombos = ['ab', 'ac', 'ad'];
  selected: string;

  onOpenChange() {
    this.load$.next(true);
  }

  ngOnInit() {
    this.subscriptions.add(
      this.load$
        .pipe(
          delay(1000),
          tap(() => this.loading = true),
          delay(1000),
          tap(() => this.loading = false)
        )
        .subscribe()
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
