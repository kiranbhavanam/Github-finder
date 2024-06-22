const url = "https://api.github.com/users/";
async function getProfile(user) {
  loading.classList.remove("hidden");
  card.classList.remove("visible");
  const res = await fetch(url + user);
  const resData = await res.json();
  loading.classList.add("hidden");
  return resData;
}
export default async function renderProfile() {
  const user = input.value;
  const userDetails = await getProfile(user);
  console.log(userDetails);
  card.innerHTML = `<div  class="w-1/2 h-3/4 my-10  mx-auto flex items-center gap-10  bg-[#4f4f4f] py-5  shadow-sm shadow-black relative" >
            <div class="border-2 rounded-full w-[200px] overflow-hidden mx-auto">
              <img src=${userDetails.avatar_url} alt="" >
            </div>
            <div class="mx-auto text-white">
              <p class="font-mono font-semibold ">Name: ${userDetails.name}</p>
              <p>Repos: ${userDetails.public_repos}</p>
              <p class="break-words"><a href=${userDetails.html_url} target="_blank"><ion-icon class="text-2xl align-middle" name="link-outline"></ion-icon>${userDetails.html_url}</a></p>
            </div>
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white">
            ID: ${userDetails.id}
            </div>
            </div>
          `;
  /* 
  card.innerHTML = ` <div class="left-section">
  <img
  src=""
  alt="profile photo"
  />
  </div>
  <div class="right-section">
  <h3>$</h3>
  <p class="bio"></p>
  <p class="desc"></p>
  <div class="profile-stats">
  <i class="fa-solid fa-eye"><span>100</span></i>
  <i class="fa-solid fa-heart"><span>100</span></i>
  <i class="fa-solid fa-message"><span>100</span></i>
  </div>
  </div>`;
  **/
  card.classList.add("visible");
}
const form = document.querySelector(".js-form");
const card = document.querySelector("#card");
const loading = document.querySelector("#loading");
const input = document.querySelector(".js-input");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  card.scrollIntoView({ behavior: "smooth" });
  renderProfile();
  input.value = "";
});
