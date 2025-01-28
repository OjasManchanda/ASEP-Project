document.addEventListener("DOMContentLoaded", () => {
    const healthContainer = document.querySelector(".health-container");


    const profiles = JSON.parse(localStorage.getItem("dogProfiles")) || [];

    function createHealthCard(profile) {
        const healthCard = document.createElement("div");
        healthCard.classList.add("health-card");

        const lastTemperature = profile.lastTemperature || "Not available";

        healthCard.innerHTML = `
            <h3>${profile.name}</h3>
            <p>Last Recorded Temperature: ${lastTemperature} °C</p>
        `;

        healthContainer.appendChild(healthCard);
    }

    profiles.forEach(profile => createHealthCard(profile));
});
