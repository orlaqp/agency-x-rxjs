import { Subject } from 'rxjs';

const s = new Subject();

// then test with subscription before emitting values
// s.subscribe(x => console.log(x));

s.next(1);
s.next(2);
s.next(3);
s.next(4);

// test with subscription after values have been emitted
s.subscribe(x => console.log(x));

console.log('done');
