const findTheOldest = function(people) {
    const sorted = people.sort((a, b) => ((("yearOfDeath" in b) ? b.yearOfDeath : 2024) - b.yearOfBirth) - ((("yearOfDeath" in a) ? a.yearOfDeath : 2024) - a.yearOfBirth));
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
