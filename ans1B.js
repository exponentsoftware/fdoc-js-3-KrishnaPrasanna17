const student = {
    name: "David",
    age: 25,
    skills: {
      frontEnd: [
        { skill: "HTML", level: 10 },
        { skill: "CSS", level: 8 },
        { skill: "JS", level: 8 },
        { skill: "React", level: 9 },
      ],
      backEnd: [
        { skill: "Node", level: 7 },
        { skill: "GraphQL", level: 8 },
      ],
      dataBase: [{ skill: "MongoDB", level: 7.5 }],
      dataScience: ["Python", "R", "D3.js"],
    },
  };
  
  const copyObjectWithoutMutaingUpdate = (skillType, skill) => {
    const newObject = { ...student };
  
    for (let key in newObject.skills) {
      if (key == skillType) {
        // like fontend, backend, database
  
        newObject.skills[key].push(skill);
      }
  
      // console.log(key, newObject[key]);
    }
    console.log(newObject.skills);
    // console.log(student.age);
  };
  
  copyObjectWithoutMutaingUpdate("frontEnd", { skill: "Bootstrap", level: 8 });
  copyObjectWithoutMutaingUpdate("backEnd", { skill: "Express", level: 9 });
  copyObjectWithoutMutaingUpdate("dataBase", { skill: "SQL", level: 9 });
  copyObjectWithoutMutaingUpdate("dataScience", "SQL");