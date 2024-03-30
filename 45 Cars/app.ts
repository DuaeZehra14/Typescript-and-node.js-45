
// **Question 45:** Cars: Create detailed car objects with flexible properties.

// **Explain & TIP:** Functions accepting a mix of fixed and arbitrary parameters let you 
// create detailed and flexible objects. This is ideal for data with a \
// few required fields and many optional fields.


type car={
    manufacture: string
    model: string
    [key:string] : any ;
}
function createCar(manufacture:string, model :string, optional : Record<string ,any>):car{
return{
  manufacture,
model,
...optional
}
}
const mycar :car = createCar("Fortuner", "Landcruiser",{color: "white","year" : "2020"});

console.log(mycar);
///assignment done