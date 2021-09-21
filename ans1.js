const students = [
    ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
    ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
  ];
  
  convertArrayToObject = (students) => {
    let object = [];
  
    for (let value of students) {
      object.push(
        Object.assign({ name: value[0], skills: value[1], scores: value[2] })
      );
    }
    return object;
  };
  console.log(convertArrayToObject(students))