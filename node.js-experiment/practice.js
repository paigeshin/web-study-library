let dateLocalString = new Date().toLocaleString('ko-KR', { timeZone: 'UTC' });
let dateLocaleDateString = new Date().toLocaleDateString('ko-KR', { timeZone: 'UTC'});
let dateLocalTimeString = new Date().toLocaleTimeString('ko-KR', { timeZone: 'UTC'});

console.log(dateLocalString);
console.log(dateLocaleDateString);
console.log(dateLocalTimeString);