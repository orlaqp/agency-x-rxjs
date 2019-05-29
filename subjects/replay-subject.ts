import { ReplaySubject } from 'rxjs';

const s = new ReplaySubject(2);

// it is not important if we subscribe
// before or after because the subject
// will always reply the amount of
// values passed in the constructor
s.subscribe(x => console.log(x));

s.next(1);
s.next(2);
s.next(3);
s.next(4);

// complete is not neccessary
s.complete();

console.log('done');
