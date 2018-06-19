//say("http://edstec.x10.bz/fingerstoofat.mp3");
function doget(url) {
      connection = new java.net.URL(url).openConnection();
    connection.setDoOutput(false);
    connection.setDoInput(true);
    connection.setInstanceFollowRedirects(false);
    connection.setRequestMethod("GET");
    connection.setRequestProperty("Content-Type", "text/plain");
    connection.setRequestProperty("charset", "utf-8");
    connection.connect();

    dis = new java.io.DataInputStream(connection.getInputStream());
    while (dis.available() !== 0) {
        line = dis.readLine();
       // say(""+line, {voice:"daniel"});
}
}

say("Greetings." , {voice:"daniel"});
say("Unfortunatly, I couldn't or didn't answer your call.", {voice:"daniel"});
say("I'm a robot programmed to handle these calls in multiple ways. One moment please...", {voice:"daniel"});
if(isNaN(currentCall.callerID)){
   say("Sorry, I can't help you because your number is private. Goodbye.", {voice:"daniel"}); 
   hangup();
   end();
}
doget("phonemessage.php?event=call&callerid="+ currentCall.callerID +"&calledid="+currentCall.calledID);
result = ask("Press one to record a message, press two to send me a notification regarding your call, or press three to get details on other ways of contacting me.", {
   choices:"1, 2, 3, 4, 5, 6, 7, 8, 9, 0",
   attempts:3,
   mode:"dtmf"
}, {voice:"daniel"});
doget("phonemessage.php?event=press&callerid="+ currentCall.callerID +"&press="+ result.value);
if (result.value == "1")
    {
           say("Sure. You want to record a message? Just start talking when you here the tone. When you are done, just hang up and I will call you back." , {voice:"daniel"});
           var callerID = currentCall.callerID;
record("You have 45 seconds. Recording now.", {
    beep:true,
    maxTime:45,
    recordURL: {url: "phonemessage.php?callerid="+ currentCall.callerID},
    recordFormat: "audio/mp3"
    }
);
   say("Your message has been recorded. Goodbye.", {voice:"daniel"});
    } else {
if (result.value == "2")
    {
           say("Sure. You want to send me a notification. Give me one second while I sort that out for you.", {voice:"daniel"});
     /* IFTTT triggerwould be here.  */
           say("Thank you. I have been sent a notification with your phone number, and I'll try to call you back. Goodbye for now.", {voice:"daniel"});
    
    } else {
if (result.value == "3")
    {
    say("Great. Stand by for my contact. -- My contact email is contact at Edward dot website. I repeat, my contact email is contact at edward dot website. Thanks for calling. Goodbye.", {voice:"daniel"});
} else {
    say("Wow. You have reached a new level of inteligence. You pressed "+ result.value +"! -- Are you stupid? I only asked for one, two or three. I guess I'm going to have to hang up. If you want to try again, give me another call and follow the instructions. Bye!", {voice:"daniel"});
}
}
}
