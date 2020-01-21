function takeANumber(katzDeliLine, name) {katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`

}

function nowServing(katzDeliLine){let line = katzDeliLine.length;

  while (line > 0) {return `Currently serving ${katzDeliLine.shift()}.`;

}

return "There is nobody waiting to be served!"

}

function currentLine(line) {
var announcement = []
for (let i = line.length, i > 0, i--) {
if(i > 1) {announcement.unshift(`line[i]-1)}
else {announcement.unshift(`The line is currently: 1. ${line[i]}`)}

  
}

}
