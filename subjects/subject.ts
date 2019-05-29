import { Subject } from 'rxjs';

const s = new Subject();

// then test with subscription before emitting values
// s.subscribe(console.log);

s.next(1);
s.next(2);
s.next(3);
s.next(4);

// test with subscription after values have been emitted
// s.subscribe(console.log);

console.log('done');
