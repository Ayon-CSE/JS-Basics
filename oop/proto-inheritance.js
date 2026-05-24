let User = {
    name : "Ayon",
    email : "ayon@gmail.com",
}

let Teacher = {
    makeVideo : true
}

let TeachingSupport = {
    isAvailable : false
}

let TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport,// connecting TeachingSupport to TASupport
};

Teacher.__proto__ = User; // connecting Teacher to user

// Modern syntax for inheritance
Object.setPrototypeOf(Teacher, User);