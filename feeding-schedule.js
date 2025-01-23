document.addEventListener("DOMContentLoaded", () => {
    const scheduleContainer = document.querySelector(".schedule-container");

    // Retrieve profiles from localStorage
    const profiles = JSON.parse(localStorage.getItem("dogProfiles")) || [];

    // Function to create a schedule card
    function createScheduleCard(profile) {
        const scheduleCard = document.createElement("div");
        scheduleCard.classList.add("schedule-card");

        // Get last feeding time or set a default
        const lastFedTime = profile.lastFedTime || "Not fed yet";

        scheduleCard.innerHTML = `
            <h3>${profile.name}</h3>
            <p>Last Fed: ${lastFedTime}</p>
        `;

        scheduleContainer.appendChild(scheduleCard);
    }

    // Populate the schedule
    profiles.forEach(profile => createScheduleCard(profile));
});
