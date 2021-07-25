const APIURL = "https://api.github.com/users/";
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    console.log(data); 
  } catch(err) {
    console.log(err);
  }
}

form.addEventListener ('submit', (e) => {
  e.preventDefault();
  const user = search.value
   if (user) {
     getUser(user);
     search.value = '';
   }

})
