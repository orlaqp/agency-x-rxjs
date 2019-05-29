import { BehaviorSubject } from 'rxjs';

const s = new BehaviorSubject<number>(0);

// if we subscribe before emitting values
// we are going to receive all emitted values
s.subscribe(console.log);

s.next(1);
s.next(2);
s.next(3);
s.next(4);

// no need to complete the observable
// s.complete();

// if we subscribe after values are
// emitted we are only going to get
// the last emitted value
// s.subscribe(x => console.log(x));

console.log('done');
