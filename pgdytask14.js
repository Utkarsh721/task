function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.Name.value;
    const email = event.target.Email.value;
  
    const obj = {
        name, 
        email
  
    }

    
    axios.post("https://crudcrud.com/api/883322e5c0c74af8bb3b3c82e57a7c42/appintmentData", obj)
       .then((respone) => {
        showNewUserOnScreen(respone.data)
        console.log(respone);
       })
       .catch((err) => {
        document.body.innerHTML = document.body.innerHTML + "<h4>Somthing went wrong</h4>"
        console.log(err);
       })

         event.target.Name.value='';
        event.target.Email.value='';
    // localStorage.setItem(obj.email, JSON.stringify(obj));
    // showNewUserOnScreen(obj)

  }
  window.addEventListener('DOMContentLoaded', (event) => {

    axios.get("https://crudcrud.com/api/883322e5c0c74af8bb3b3c82e57a7c42/appintmentData")
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
    <button onclick="deleteUser('${user._id}')"> Delete User</button>
    <button onclick="editUserDetails('${user.name}','${user.email}','${user._id}')">Edit Details</button>
    
    </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
  }
  function editUserDetails (name, email, userId) {
    document.getElementById('Name').value = name;
    document.getElementById('Email').value = email;
   
  
    deleteUser(userId);

  }
  
  function deleteUser(userId) {
   axios.delete(`https://crudcrud.com/api/883322e5c0c74af8bb3b3c82e57a7c42/appintmentData/${userId}`)
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
    const childNodeToBeDeleted = document.getElementById(`${userId}`);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }
  }
 
 