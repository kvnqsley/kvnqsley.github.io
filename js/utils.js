export function setYearly() {
    localStorage.setItem('pc','+$90/yr');
localStorage.setItem('os','+$10/yr');
localStorage.setItem('ls','+$20/yr');
localStorage.setItem('total','+$120/yr')
};

export function setMonthly() {
    localStorage.setItem('pc','+$9/mo');
localStorage.setItem('os','+$1/mo');
localStorage.setItem('ls','+$2/mo');
localStorage.setItem('total','+$12/mo')
};

export function addonsYearly() {
    localStorage.setItem('sub1','+$10/yr');
localStorage.setItem('sub2','+$20/yr');
localStorage.setItem('sub3','+$20/yr');
};

export function addonsMonthly() {
    localStorage.setItem('sub1','+$1/mo');
localStorage.setItem('sub2','+$2/mo');
localStorage.setItem('sub3','+$2/mo');
};