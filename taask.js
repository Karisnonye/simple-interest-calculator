let data = [
    {
      Principal: 2500,
      time: 1.8,
    },
    {
      Principal: 1000,
      time: 5,
    },
    {
      Principal: 3000,
      time: 1,
    },
    {
      Principal: 2000,
      time: 3,
    },
  ];
  
  function interestCalculator(arr) {
    var interestData = [];
    let interest;
    let rate;
    arr.forEach(function (item) {
      if (item.Principal >= 2500 && item.time > 1 && item.time < 3) {
        rate = 3;
        interest = (item.Principal * rate * item.time) / 100;
        interest;
      } else if (item.Principal >= 2500 && item.time >= 3) {
        rate = 4;
        interest = (item.Principal * rate * item.time) / 100;
        interest;
      } else if (item.Principal < 2500 && item.time <= 1) {
        rate = 2;
        interest = (item.Principal * rate * item.time) / 100;
        interest;
      } else {
        rate = 1;
        interest = (item.Principal * rate * item.time) / 100;
        interest;
      }
      var dataz = {
        principal: item.Principal,
        time: item.time,
        interest: interest,
        rate: rate,
      };
      interestData.push(dataz);
    });
    console.log("interestData=", interestData);
    return interestData;
  }
  
  interestCalculator(data);
  