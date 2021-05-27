const document = require('fs');
 const fetch = require("node-fetch");
const { parse } = require('path');
  fetch("http://history.muffinlabs.com/date")
     .then(response => response.json())
    .then(data => {
    });

  var readline = require('readline');
  var sl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
  });
    sl.question("Month: ", function month(monthanswer )   {
     console.log("Thank you for giving month", monthanswer);
     sl.close();

     var readline = require('readline');
     var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
     });
     rl.question("Date: ", function (dateanswer)   {
           
            console.log("Thank you for giving date", dateanswer);
       rl.close();
     

      fetch("https://history.muffinlabs.com/date/"+monthanswer+"/"+dateanswer)
    .then(response => response.json())
    
    .then(data => {

          
            
          
        for(i=0; i<data.data.Events.length; i+=1){//i<length of data.data
        var events = "Event - "+(data.data.Events[i].text);
        console.log(events)
        // displayHistoryData(events)
        console.error = () => {};
        }


       for(i=0; i<data.data.Births.length; i+=1){
       var births = "Births - "+(data.data.Births[i].text);
       console.log(births)
       console.error = () => {};
      }
       
      for(i=0; i<data.data.Deaths.length; i+=1){
       var deaths = "Deaths - " + (data.data.Deaths[i].text);
       console.log(deaths)
       console.error = () => {};
      }
        
    });
     });
});
    
  


