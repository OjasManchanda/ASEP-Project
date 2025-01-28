document.addEventListener("DOMContentLoaded", () => {
    const profileContainer = document.querySelector(".profile-container");

    function loadProfiles() {
       
        const profiles = JSON.parse(localStorage.getItem("dogProfiles")) || [];

        profileContainer.innerHTML = "";

        profiles.forEach(profile => {
            createProfileCard(profile);
        });
    }

    function createProfileCard(profile) {
        const profileCard = document.createElement("div");
        profileCard.classList.add("profile-card");

        profileCard.innerHTML = `
            <h3>${profile.name}</h3>
            <p>RFID Tag: ${profile.rfid}</p>
            <p>Breed: ${profile.breed}</p>
        `;

        profileContainer.appendChild(profileCard);
    }

    loadProfiles();
});


  document.addEventListener("DOMContentLoaded", () => {
    const clearButton = document.querySelector("#clear-profiles"); 
  
    function clearAllProfiles() {
      localStorage.removeItem("dogProfiles");
      alert("All profiles have been cleared!");
      window.location.reload(); 
    }
  
    clearButton.addEventListener("click", clearAllProfiles);
  });
  
  