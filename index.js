// code your solution here

function superbowlWin(record) {
    const winObject = record.find(obj => obj.result === "W");
    return winObject ? winObject.year : undefined;
  }
  