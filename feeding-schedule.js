document.addEventListener("DOMContentLoaded", () => {
    const scheduleContainer = document.querySelector(".schedule-container");

    
    const profiles = JSON.parse(localStorage.getItem("dogProfiles")) || [];

    
    function createScheduleCard(profile) {
        const scheduleCard = document.createElement("div");
        scheduleCard.classList.add("schedule-card");

        const lastFedTime = profile.lastFedTime || "Not fed yet";

        scheduleCard.innerHTML = `
            <h3>${profile.name}</h3>
            <p>Last Fed: ${lastFedTime}</p>
        `;

        scheduleContainer.appendChild(scheduleCard);
    }

    profiles.forEach(profile => createScheduleCard(profile));
});
