# answermachine
Simple Voicemail with multiple options made using Javascript and PHP
![this](https://media.discordapp.net/attachments/454766646590963722/458747594286432264/nvJxu4UDCSMAAAAABJRU5ErkJggg.png)
# How to
You need two things:
1. A Tropo Account (www.tropo.com)
2. Hosting with PHP

First make a new Tropo application and choose "Scripting". This script is not built for the web API.
Next, add a number to the project(your country) and finish setting it up.

Now, load the two PHP files onto your hosting (same directory) and take a note of the URL.

Back in Tropo, make a new answer.js file and paste in the code, replacing any "URL_HERE" or simular with the appropriate links.
Give the number a call and check everything works. Great! Now just go into the call forwarding options on your phone and forward busy, declined and unavailible calls to the number. Ta-da, your every own voicemail.
