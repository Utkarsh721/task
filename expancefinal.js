function saveToCrudCrud(event) {
  event.preventDefault();
  const Amount = event.target.ExpAmount.value;
  const dis= event.target.dis.value;
  const cat = event.target.Category.value;
  const expance = {
      Amount,
      dis,
      cat
  }
  axios.post("https://crudcrud.com/api/09b84bc7203e4e2cb11a6d131aa4942b/ExpenseTracker",expance)
    .then(res => console.log(res))
    .catch(err => console.error(err))

    event.target.ExpAmount.value='';
    event.target.dis.value='';
    event.target.Category.value='';
}
window.addEventListener('DOMContentLoaded', (event) => {

  axios.get("https://crudcrud.com/api/09b84bc7203e4e2cb11a6d131aa4942b/ExpenseTracker")
    .then(res=>{
        for(let i=0 ; i<res.data.length ; i++)
        {
            showNewUserOnScreen(res.data[i]);
        }
})
.catch(err => console.error(err));
});

function showNewUserOnScreen(user) {
  // console.log(localStorage.getItem(user.email));
  if(localStorage.getItem(user.dis)!== null) {
      removeUserFromScreen(user.dis);
  }
  const parentNode  = document.getElementById('ListOfexp');
  const childHTML = `<li id=${user._id}> ${user.Amount} - ${user.dis} - ${user.cat}
  
  <button onclick=editUserDetails('${user.Amount}','${user.dis}','${user.cat}','${user._id}')>Edit Details</button>
  <button onclick=deleteUser('${user._id}')> Delete User</button>
  </li>`
  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
function deleteUser(Id) {
  axios.delete(`https://crudcrud.com/api/09b84bc7203e4e2cb11a6d131aa4942b/ExpenseTracker/${Id}`)
  removeUserFromScreen(Id);
}
 
function removeUserFromScreen(Id) {
  const parentNode = document.getElementById('ListOfexp');
const childNodeToBeDeleted = document.getElementById(`${Id}`);
  if(childNodeToBeDeleted) {
      parentNode.removeChild(childNodeToBeDeleted);
  }
}
function editUserDetails ( Amount, dis, cat,Id) {
  document.getElementById('ExpAmount').value = Amount;
  document.getElementById('dis').value = dis;
  document.getElementById('Category').value = cat;

  deleteUser(Id);
}