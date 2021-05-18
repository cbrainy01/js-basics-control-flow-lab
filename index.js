function scuberGreetingForFeet(distance){
  // Write your code here!
  let response;
  if (distance >= 2000) {
    if(distance > 2500) {
      response = "No can do.";
    } else {response = "I will gladly take your thirty bucks.";}
  }

  else if (distance <= 400) {
    response = "This one is on me!";
  }
  
  return response;
}

function ternaryCheckCity(destination){
  // Write your code here!
  const answer = destination == "NYC" ? "Ok, sounds good." : "No go."; 
return answer;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let reply;
  switch (tip) {
    case "generous":
      reply = "Thank you so much.";
      break;
    case "not as generous":
     reply = "Thank you.";
     break;
    default: reply = "Bye.";
      break;
  }

  return reply;
}

