document.addEventListener("DOMContentLoaded", () => {
    const profileContainer = document.querySelector(".profile-container");

    function loadProfiles() {
        // Fetch profiles from localStorage
        const profiles = JSON.parse(localStorage.getItem("dogProfiles")) || [];

        // Clear the existing content to avoid duplicates
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
    const clearButton = document.querySelector("#clear-profiles"); // Assuming you add this button in the HTML
    
    // Function to clear all profiles
    function clearAllProfiles() {
      localStorage.removeItem("dogProfiles");
      alert("All profiles have been cleared!");
      window.location.reload(); // Reload to remove the profiles from the UI
    }
  
    clearButton.addEventListener("click", clearAllProfiles);
  });
  
  