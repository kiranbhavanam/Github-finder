const url = "https://api.github.com/users/";
async function getProfile(user) {
  const res = await fetch(url + user);
  const resData = await res.json();
  return resData;
}
 export default async function renderProfile(){

  const user = input.value;
  const userDetails = await getProfile(user);
  console.log(userDetails);
  card.innerHTML = ` <div class="left-section">
  <img
  src="${userDetails.avatar_url}"
  alt="profile photo"
  />
  </div>
  <div class="right-section">
  <h3>${userDetails.name}</h3>
  <p class="bio">${userDetails.bio}</p>
  <p class="desc"><a href=${userDetails.html_url} target="_blank">${userDetails.html_url}</a></p>
  <div class="profile-stats">
  <i class="fa-solid fa-eye"><span>100</span></i>
  <i class="fa-solid fa-heart"><span>100</span></i>
  <i class="fa-solid fa-message"><span>100</span></i>
  </div>
  </div>`;
}
const input = document.querySelector("input");
const form = document.querySelector("form");
const card = document.querySelector(".card");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  //console.log(e);
  renderProfile();
  });
  