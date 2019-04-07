function takeANumber(queue,name) {
  queue.push(name);
  var msg = "Welcome, " + name + ". You are number " + queue.length + " in line.";
  console.log(msg);
}

function nowServing(queue) {
  if (queue.length === 1) {
    const emptyQ = "There is nobody waiting to be served!";
    return emptyQ;
  }
  else {
    return queue.shift();
  }
}

function currentLine(queue) {
  var i = 0;
  if (queue.length === 1) {
    const emptyQ = "The line is currently empty.";
    return emptyQ;
  }
  else {
    var cLine = "The line is currently:";
    while (queue[i]) {
      var app = " " + i +". " + queue[i] + ",";
      cLine = cLine + app;
    }
    cLine = cLine.substring(0, cLine.length-1);
    return cLine;
  }
}