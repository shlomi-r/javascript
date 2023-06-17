/*
[{s:1, e:4},{s:5, e:7}, {s:3, e:5}, {s:8, e:9},]
[{s:1, e:4},{s:3, e:5}, {s:5, e:7}, {s:8, e:9},]
[{s:1, e:5},{s:5, e:7}, {s:8, e:9},]
[{s:1, e:7}, {s:8, e:9},]
*/

const events = [{s:1, e:4},{s:5, e:7}, {s:3, e:5}, {s:8, e:9},];

function mergeEvents(arr){
    // Sort the events by start time asc
    arr.sort((a,b) => a.s - b.s); 
    
    const mergedEvents = [];
    let currentEvent = arr[0];

    // Loop through the events and merge the overlapping events
    for(let i=1 ; i < arr.length ; i++){
        let event = arr[i];
        if(event.s <= currentEvent.e){
            // The current event and the next event overlap, so merge them
            currentEvent.e = Math.max(currentEvent.e ,event.e);
        }else{
            // The current event and the next event don't overlap, so add the current event to the merged events array and set the current event to the next event
            mergedEvents.push(currentEvent);
            currentEvent = event;
        }
    }

  // Add the last event to the merged events array
  mergedEvents.push(currentEvent);

  return mergedEvents;
}

const merged = mergeEvents(arr);
console.log(merged);
