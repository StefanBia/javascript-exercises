const findTheOldest = function(people) {

    let oldest;
    let maxAge = 0;
    for(let i = 0; i < people.length; i++){

        let birth, death;

        birth = people[i].yearOfBirth;
        death = people[i].yearOfDeath;

        if(death === undefined){
            death = 2024;
        }

        if(maxAge < death - birth){
            maxAge = death - birth;
            oldest = people[i];
        }

    }
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
