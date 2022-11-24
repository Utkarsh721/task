function LocalStorage(event) {
  event.preventDefault();
  const Amount = event.target.ExpAmount.value;
  const dis= event.target.dis.value;
  const cat = event.target.Category.value;
  const expance = {
      Amount,
      dis,
      cat
  }
  localStorage.setItem(expance.dis,JSON.stringify(expance));
  showNewUserOnScreen(expance);
}
window.addEventListener('DOMContentLoaded', (event) => {
  Object.keys(localStorage).forEach(key => {
      const user = JSON.parse(localStorage.getItem(key))
      showNewUserOnScreen(user)       
  })
});

function showNewUserOnScreen(user) {
  // console.log(localStorage.getItem(user.email));
  if(localStorage.getItem(user.dis)!== null) {
      removeUserFromScreen(user.dis);
  }
  const parentNode  = document.getElementById('ListOfexp');
  const childHTML = `<li id=${user.dis}> ${user.Amount} - ${user.dis} - ${user.cat}
  
  <button onclick=editUserDetails('${user.Amount}','${user.dis}','${user.cat}')>Edit Details</button>
  <button onclick=deleteUser('${user.dis}')> Delete User</button>
  </li>`
  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
function deleteUser(dis) {
  localStorage.removeItem(dis);
  removeUserFromScreen(dis);
}
function removeUserFromScreen(dis) {
  const parentNode = document.getElementById('ListOfexp');
  const childNodeToBeDeleted = document.getElementById(dis);
  if(childNodeToBeDeleted) {
      parentNode.removeChild(childNodeToBeDeleted);
  }
}
function editUserDetails ( Amount, dis, cat) {
  document.getElementById('ExpAmount').value = Amount;
  document.getElementById('dis').value = dis;
  document.getElementById('Category').value = cat;

  deleteUser(dis);
}