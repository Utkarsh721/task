const posts=[
    {title: 'Post One' , body: 'This is post one' , createdAt: new Date().getTime()},
    {title: 'Post Two' , body: 'This is post two', createdAt: new Date().getTime()}
];
let intervalId=0;

function getPosts() {
    clearInterval(intervalId);
    intervalId=setInterval(() => {
     let output= '';
     
     for(let i=0;i<posts.length;i++) {
        output +=`<li>${posts[i].title} -last updated${(new Date().getTime() - posts[i].createdAt)/1000} second ago</li>`
    }
    document.body.innerHTML = output;
    },1000)
}

function createPost(post ){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            posts.push({...post, createdAt:new Date().getTime()});
           
             const error = false;

             if(!error) {
                resolve();
             } else{
                reject('Error: Something went wrong');
             }

        } , 1000)
    });

 }
 const user ={
    username:'Utkarsh',
    lastActivityTime: '26th of Novmber'
}

 function updateLastUserActivityTime(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            user.lastActivityTime= new Date().getTime();
            resolve(user.lastActivityTime)

        } , 1000)
    });
    
 }

 
function deletePost(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            //  const error = false;

             if(posts.length>0) {
                const lastelement= posts.pop()
                resolve(lastelement);
             } else{
                reject('Array is empty now');
             }

        } , 1000)
    });
    
 }
 createPost({title:'Post Three' , body:'This is post three'})
 .then(() => {
    getPosts()
    deletePost().then(() => {
        getPosts();
        deletePost().then(() => {
            getPosts()
            deletePost().then(() => {
                getPosts()
                deletePost().then(() => {})
                .catch((err) => {
                    console.log('Inside catch block', err);
                })
            }).catch((err) => {})
        }).catch((err) => {})
    }).catch((err) => {})
 })

 .catch(err => console.log(err));


 function userupdatepost() {
    Promise.all([createPost,updateLastUserActivityTime])
.then(([createPostresolves, updateLastUserActivityTimeresolves]) => {
       console.log(updateLastUserActivityTimeresolves);
       console.log(createPostresolves);
    })
    .catch(err => console.log(err))
 }

//Promise.all
// const promise1=Promise.resolve('Hello World');
// const promise2=10;
// const promise3=new Promise((resolve ,reject) =>
//  setTimeout(resolve , 2000 , 'Goodbye'));

// Promise.all([promise1, promise2, promise3])
// .then(values => console.log(values));


//  function create4thPost (post , callback){
//     setTimeout(() => {
//         posts.push({...post, createdAt:new Date().getTime()});
//         callback()
//     } , 8000)
//  }
// getPosts();

// createPost({title:'Post Three' , body: 'This is post three'} , getPosts);
// create4thPost({title:'Post Four' , body: 'This is post four'} , getPosts);

