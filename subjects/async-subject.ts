import { AsyncSubject } from 'rxjs';

const s = new AsyncSubject();

// it is not important if we subscribe
// before or after because the subject
// will always emit the last value before
// calling complete
s.subscribe(x => console.log(x));

s.next(1);
s.next(2);
s.next(3);
s.next(4);

// if the observable/subject does not complete
// we will not get any output
s.complete();

console.log('done');
