// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[4]);
// li[4].style.backgroundColor= 'green'
// li[4].style.fontWeight='bold'


// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[4]);
// items[2].style.backgroundColor= 'green'


//QuerrySelectorAll//
var items=document.querySelectorAll('.list-group-item')
console.log(items);
items[1].style.color='green'

var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroungColor='#00FF00'
}