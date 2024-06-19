import {Directive, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

@Directive()
export class BaseComponent implements OnDestroy {
	private subscriptions: Subscription[] = [];

	ngOnDestroy(): void {
		this.subscriptions?.forEach(subscription => subscription.unsubscribe());
	}

	public watch(subscription: Subscription): void {
		this.subscriptions.push(subscription);
	}
}
