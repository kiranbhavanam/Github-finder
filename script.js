const url = "https://api.github.com/users/";
async function getProfile(user) {
  loading.classList.remove("hidden");
  card.classList.remove("visible");
  const res = await fetch(url + user);
  const resData = await res.json();
  loading.classList.add('hidden');
  return resData;
}
export default async function renderProfile() {
  const user = input.value;
  const userDetails = await getProfile(user);
  console.log(userDetails);
  card.innerHTML = `<div  class="w-1/2  mx-auto flex items-center gap-10  bg-[#4f4f4f] py-5  shadow-sm shadow-black" >
            <div class="border-2 rounded-full w-[200px] overflow-hidden mx-auto">
              <img src=${userDetails.avatar_url} alt="" >
            </div>
            <div class="mx-auto w-1/3 ">
              <p class="font-mono font-semibold text-white ">${userDetails.name}</p>
              <p>${userDetails.bio}</p>
              <p><a href=${userDetails.html_url} target="_blank">${userDetails.html_url}</a></p>
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
 card.classList.add('visible')

}
const form = document.querySelector(".js-form");
const card = document.querySelector("#card");
const loading = document.querySelector("#loading");
const input = document.querySelector(".js-input");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  card.scrollIntoView({ behavior: "smooth" });
  renderProfile();
});
