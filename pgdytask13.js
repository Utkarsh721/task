function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
  
    const obj = {
        name, 
        email,
  
    }

    
    axios.post("https://crudcrud.com/api/bc3ad19cf6ab48059c45673a17d07c4c/appintmentData", obj)
       .then((respone) => {
        showNewUserOnScreen(respone.data)
        console.log(respone);
       })
       .catch((err) => {
        document.body.innerHTML = document.body.innerHTML + "<h4>Somthing went wrong</h4>"
        console.log(err);
       })


    // localStorage.setItem(obj.email, JSON.stringify(obj));
    // showNewUserOnScreen(obj)
  }
  window.addEventListener('DOMContentLoaded', (event) => {

    axios.get("https://crudcrud.com/api/bc3ad19cf6ab48059c45673a17d07c4c/appintmentData")
    .then((respone) => {
      console.log(respone);
      for(var i=0;i<respone.data.length;i++){
        showNewUserOnScreen(respone.data[i])
      }
    })
    .catch((err) =>{
      console.log(err);
    })
   
  });
  
  function showNewUserOnScreen(user) {

    // user = {
    //   _id: '',
    //   name:'',
    //   email: ''
    // }
    // console.log(localStorage.getItem(user.email));
    if(localStorage.getItem(user.email)!== null) {
        removeUserFromScreen(user.email);
    }
    const parentNode  = document.getElementById('ListOfUser');
    const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}
    <button onclick=deleteUser('${user._id}')> Delete User</button>
    <button onclick=editUserDetails('${user.name}','${user._id}')>Edit Details</button>
    
    </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
  }
  
  function deleteUser(userId) {
   axios.delete(`https://crudcrud.com/api/bc3ad19cf6ab48059c45673a17d07c4c/appintmentData/${userId}`)
   .then((respone) =>{
    removeUserFromScreen(userId);
   })
   .catch((err) =>{
    console.log(err);
   })

    // localStorage.removeItem(emailId);
   
  }
  function removeUserFromScreen(userId) {
    const parentNode = document.getElementById('ListOfUser');
    const childNodeToBeDeleted = document.getElementById(userId);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }
  }
  function editUserDetails ( username, emailId, phoneNumber) {
    document.getElementById('username').value;
    document.getElementById('emailId').value ;
  
  
    deleteUser(emailId);

  }
 