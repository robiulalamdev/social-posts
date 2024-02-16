const calculateTimeDifference = (selectedEvent, setSpendHour) => {
    const startTimeParts = selectedEvent.startTime.match(/(\d+):(\d+) ([APMapm]{2})/);
    const startTime = new Date();
    startTime.setHours(
      parseInt(startTimeParts[1]),
      parseInt(startTimeParts[2]),
      startTimeParts[3].toUpperCase() === "PM" ? 12 : 0
    );

    let endTime;
    if (selectedEvent.endTime !== "Invalid Date") {
      const endTimeParts = selectedEvent?.endTime.match(/(\d+):(\d+) ([APMapm]{2})/);
      endTime = new Date();
      endTime.setHours(
        parseInt(endTimeParts[1]),
        parseInt(endTimeParts[2]),
        endTimeParts[3].toUpperCase() === "PM" ? 12 : 0
      );
    } else {
      endTime = new Date(); // Use current time
    }


    const timeDifference = endTime - startTime;

    // Convert milliseconds to hours and minutes
    const hours = Math.floor(timeDifference / (60 * 60 * 1000));
    setSpendHour(hours)
  };


  export default calculateTimeDifference