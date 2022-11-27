// await
// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringTicks= new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('ticket');

//     }, 3000)
// })

// const getPopcorn =promiseWifeBringTicks.then((t) =>{
//     console.log('wife: i have the ticket');
//     console.log('husband: we sholud go in ');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve,reject) =>resolve(`${t} popcorn`))
// })

// const getButter =getPopcorn.then((t) =>{
//     console.log('husband: i got some popcorn');
//     console.log('husband: we sholud go in ');
//     console.log('wife: I need butter on my popcorn ');
//     return new Promise((resolve,reject) =>resolve(`${t} Butter`))
// })
// const getColdDrinks =getButter.then((t) =>{
//     console.log('husband: i got some cold drink also for you');
//     console.log('husband: we sholud go in ');
//     console.log('wife: yes please bring the cold drink then we go in ');
//     return new Promise((resolve,reject) =>resolve(`${t} cold drink`))
// })

// getPopcorn.then((t) => console.log(t));
// getButter.then((t) => console.log(t))

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');
// getColdDrinks.then((t) => console.log(t));



//async
//await function is always used inside the async function

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const perMovie = async () => {


const  promiseWifeBringTicks= new Promise((resolve,reject) =>{
    setTimeout(() => resolve('ticket'),3000);
});
const getPopcorn = new Promise((resolve,reject) =>resolve(`popcorn`));
const getButter = new Promise((resolve,reject) =>resolve(`butter`));
const getColdDrinks = new Promise((resolve,reject) =>resolve(`coke`));
let ticket = await promiseWifeBringTicks;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we sholud go in ');
    console.log('wife: no i am hungry');
    let popcorn= await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we sholud go in ');
    console.log('wife: I need butter on my popcorn ');
    let butter = await getButter;
    console.log(`husband: i got some ${butter}`);

    console.log('husband: i got some cold drink also for you');
    console.log('husband: we sholud go in ');
    console.log('wife: yes please bring the cold drink then we go in ');
      let coke = await getColdDrinks;
    console.log(`husband: i got some ${butter} on popcorn with coke`);
    console.log(`husband: anything else darling?`);
    console.log(`Wife: lets go we are going to miss the preivew`);
    console.log(`Husband: thanks for the reminder *grin*`);


 return ticket;
}

perMovie().then((m) => console.log(`person3: shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');




















































