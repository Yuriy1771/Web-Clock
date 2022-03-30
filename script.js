window.addEventListener('load', calculateTime);

function calculateTime() {
   let date = new  Date();
   let dayNumber = date.getDay();
   let hour = date.getHours();
   let minute = date.getMinutes();
   let ampm = hour >= 12 ? 'PM' : 'AM';
   let dayNames = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

   hour = hour < 10 ? '0'+ hour : hour;
   minute = minute < 10 ? '0' + minute : minute;
   dayNumber = dayNumber > 9 ? '0' + dayNumber : dayNumber;

   document.querySelector('#day').innerHTML = dayNames[dayNumber];
   document.querySelector('#hour').innerHTML = hour;
   document.querySelector('#minute').innerHTML = minute;
   document.querySelector('#ampm').innerHTML = ampm;
   setTimeout(calculateTime, 200);
   console.log(hour);
}

calculateTime();