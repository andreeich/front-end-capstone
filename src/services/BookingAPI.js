const availableTimesByDate = {
  '2024-01-29': ['10:00', '11:00', '12:00'],
  '2024-01-01': ['10:00', '11:00', '12:00'],
  '2024-01-02': ['14:00', '15:00', '16:00'],
  '2024-01-03': ['10:00', '11:00', '12:00'],
  '2024-01-04': ['14:00', '15:00', '16:00'],
  '2024-01-05': ['10:00', '11:00', '12:00'],
  '2024-01-06': ['14:00', '15:00', '16:00'],
  '2024-01-07': ['10:00', '11:00', '12:00'],
  '2024-01-08': ['14:00', '15:00', '16:00'],
  '2024-01-09': ['10:00', '11:00', '12:00'],
  '2024-01-10': ['14:00', '15:00', '16:00'],
  '2024-01-11': ['10:00', '11:00', '12:00'],
  '2024-01-12': ['14:00', '15:00', '16:00'],
  '2024-01-13': ['10:00', '11:00', '12:00'],
  '2024-01-14': ['14:00', '15:00', '16:00'],
  '2024-01-15': ['10:00', '11:00', '12:00'],
  '2024-01-16': ['14:00', '15:00', '16:00'],
  '2024-01-17': ['10:00', '11:00', '12:00'],
  '2024-01-18': ['14:00', '15:00', '16:00'],
  '2024-01-19': ['10:00', '11:00', '12:00'],
  '2024-01-20': ['14:00', '15:00', '16:00'],
};


const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
      setTimeout(() =>{
          if(availableTimesByDate[date]){
              resolve(availableTimesByDate[date])
          }
          else{
              reject(new Error('No available times for the selected date.'));
          }
      } , 1000)
  })
}

const submitAPI = (date, time) => {
  
  availableTimesByDate[date] = availableTimesByDate[date].filter(t => t !== time);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (date, time) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error('Form submission failed.'));
      }
    }, 1000); // Simulate API delay
  });
};

export{fetchAPI,submitAPI}