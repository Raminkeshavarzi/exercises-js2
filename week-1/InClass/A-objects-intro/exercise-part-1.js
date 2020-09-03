/*

Think of 5 different real world "things" that you 
can describe with a JavaScript object

Assign each of them to a separate variable


For example:
var car = {
    brand: "Seat",
    model: "Arona",
    color: "white",
    horsepower: 115,
    doors: 5
};

*/

const createFootball = (GK, DF, MF, CF, coach) => {
    return {
        gk: GK,
        df : DF,
        mf: MF,
        cf : CF,
        coach : coach,
    }
};

const FCB = createFootball('Valdes', 'Pique', 'XAvi', 'Messi', 'Pep');
console.log(`The Football Club Barecelona is playing with ${FCB.gk} as GoalKeeper, ${FCB.df} as defender, ${FCB.mf} as always he plays as midfilder and the Goat ${FCB.cf} as CF . Coach is ${FCB.coach}`);

console.log("****************************************************")

const house = (location, year, price, rooms) => {
    return {
        location,
        year,
        price,
        rooms
    }
};

const houseInGracia = house('Gracia', '2000', '450K', '3');
console.log(`This beautiful house is located ${house.location}, has ${house.rooms}, and it's built in ${house.year}. The final price is ${house.price}`)
console.log("****************************************************")


const plane = (airLine, passengers, destination ) => {
    return {
        airLine,
        passengers,
        destination,
    }
};
const british = plane ('British Airline', 200 , "BCN")
console.log(`The ${british.airLine} airline flight with ${british.passengers} is flying to ${british.destination} `);
console.log("****************************************************")


const city = (name ,population, country,) => {
    return {
        population,
        country,
    }
};
const barcelona = city('Barcelona' ,'1600000', 'Spain')
console.log(`${barcelona.name} is a city in ${barcelona.country} with ${barcelona.population} residents.`);
console.log("****************************************************")



const menu = (starter, main, dessert) => {
    return {
        starter,
        main,
        dessert,
    }
};
const table1 = menu('Salad', 'Kebab', "Ice Cream")
console.log(`So, your order is start with ${table1.starter} as appetizer, then ${table1.main} as main dish. Finally, ${table1.dessert} as dessert `);