document.addEventListener("DOMContentLoaded", () => {
    const healthContainer = document.querySelector(".health-container");

    // Retrieve profiles from localStorage
    const profiles = JSON.parse(localStorage.getItem("dogProfiles")) || [];

    // Function to create a health card
    function createHealthCard(profile) {
        const healthCard = document.createElement("div");
        healthCard.classList.add("health-card");

        // Get last temperature or set a default value
        const lastTemperature = profile.lastTemperature || "Not available";

        healthCard.innerHTML = `
            <h3>${profile.name}</h3>
            <p>Last Recorded Temperature: ${lastTemperature} °C</p>
        `;

        healthContainer.appendChild(healthCard);
    }

    // Populate the health monitoring data
    profiles.forEach(profile => createHealthCard(profile));
});
