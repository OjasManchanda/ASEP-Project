document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".add-profile-form");
    const nameInput = document.querySelector("#dog-name");
    const rfidInput = document.querySelector("#rfid-tag");
    const breedInput = document.querySelector("#breed");
  
    // Function to validate form inputs
    function validateForm() {
      if (!nameInput.value.trim()) {
        alert("Please enter the dog's name.");
        return false;
      }
      if (!rfidInput.value.trim()) {
        alert("Please enter a valid RFID tag.");
        return false;
      }
      if (!breedInput.value.trim()) {
        alert("Please enter the dog's breed.");
        return false;
      }
      return true;
    }
  
   
    function saveProfile(profile) {
      let profiles = JSON.parse(localStorage.getItem("dogProfiles")) || [];
      profiles.push(profile);
      localStorage.setItem("dogProfiles", JSON.stringify(profiles));
    }
  

    function handleFormSubmit(event) {
      event.preventDefault();
  
      if (!validateForm()) {
        return;
      }

      const newProfile = {
        name: nameInput.value.trim(),
        rfid: rfidInput.value.trim(),
        breed: breedInput.value.trim(),
      };

      saveProfile(newProfile);

      alert(`Profile for ${newProfile.name} has been added successfully!`);

      form.reset();
    }

    form.addEventListener("submit", handleFormSubmit);
  });
  
