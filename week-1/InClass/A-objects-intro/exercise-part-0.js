const addLaptop =(name, model, year, ram, color) =>{
    return {
      name: name,
      model: model,
      year: year,
      ram: ram,
      color: color,
    }
  }

const raminLaptop =  addLaptop('MacBook Air', 'gv-2394', '2017', '4 GB', 'Silver');

console.log(`My laptop is ${raminLaptop.name}, I bought it in ${raminLaptop.year}`)