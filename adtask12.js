// //House

// this.table='window table';

// const cleanTable=function(soap)  {
     
//     const innerFunction= function(soap) => {
//         console.log(`cleaning ${this.table} using${soap}`);
//     }
    
// innerFunction(soap);
    
// };

// // cleanTable.call(this, 'some soap');



//  this.garage={
//     table:'garage table',
//     cleanTable(){
//         console.log(`cleaning ${this.table}`);
//     }
//  };
// this.garage.table//access the garage table

//  let johnsRoom={
//     table:'johns table ',
//     cleanTable(){
//         console.log(`cleaning ${this.table}`);
//     }
//  }
// class createRoom{
//     constructor(name)
//     {
//         this.table=`${name} table`
//     }
//     cleanTable(soap){
//         console.log(`cleaning ${this.table} using${soap}`);
//     }
// }


// // let createRoom={
// //     this.table= `${name}s table `
// // }
// // createRoom.prototype.cleanTable=function(soap){
// //     console.log(`cleaning ${this.table} using${soap}`); 
// // }
// const jillsRoom=new createRoom('jills');
// const johnsRoom=new createRoom('john');


// //  let createRoom={
// //     this.table= `${name}s table `
// // }
// // createRoom.prototype.cleanTable=function(soap){
// //     console.log(`cleaning ${this.table} using${soap}`); 
// // }
// const jillsRoom=new createRoom('jills');
// const johnsRoom=new createRoom('john');
// //  this.garage.cleanTable()
// //  cleanTable.call(this, 'some soap');
// //  cleanTable.call(this.garage, 'some soap');
// //  cleanTable.call(johnsRoom, 'some soap');
// //  cleanTable.call(jillsRoom, 'some soap');
// console.log(this.johnsRoom.table);

// jillsRoom.cleanTable('some soap');
// johnsRoom.cleanTable('some soap');








class Student {
    constructor(name ,age ,board_mark)
    {
        this.name=name;
        this.age=age;
        this.board_mark=board_mark
    }
    Eligible_palcement(minPlacementAge){
        console.log(this);
       return (minMark) =>{
        console.log('inside egligibleForCurrentCompany' , this);
        if(this.board_mark > minMark && this.age>minPlacementAge){
            console.log(this.name + "is ready for placement");
        }
        else
        {
            console.log(this.name + "is ready for placement");
        }
       }
    }
}

let stu1= new Student("ab",19,42);
let stu2= new Student("bb",17,32);
let stu3= new Student("c",19,40);
let stu4= new Student("adb",16,45);
let stu5= new Student("abf",22,33);

stu1.Eligible_palcement(18)(40);
stu2.Eligible_palcement(18)(42);
stu3.Eligible_palcement(18)(32);
stu4.Eligible_palcement(18)(80);
stu5.Eligible_palcement(18)(21);





// "use strict";

// var getA= function(a){
//     return a
// };

// let getA= a => a;

// console.log(getA(1));

// let square= a => a*a;

// let square= (a) => { return a*a};

// console.log(square(2));


// var a=4

// let square= () => { return a*a};

// console.log(square());



// var a=4

// let square= _ => { return a*a};

// console.log(square());



// var a=4

// let mult= (a,b) => { return a*b};

// console.log(mult(2,4));


// var x= function(){

//     var that=this;
//     this.val=1;
//     setTimeout(function(){
//         that.val++;
//         console.log(that.val);
//     } , 1)
// }

// var xx=new x()


// var x= function(){

   
//     this.val=1;
//     setTimeout(() => {
//         this.val++;
//         console.log(this.val);
//     } , 1)
// }

// var xx=new x()

// var x= (...n) => {
//     console.log(n[0]);
// };

// x(1,2,3);

