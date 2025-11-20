//
// 🔹 Scheduled Lodge Events
const calendarEvents = [
  {
    title: "Regular Communication",
    date: "December 5, 2025",
    time: "7:30 PM",
    location: "Fergus Lodge",
    details: "Regular monthly meeting. Dinner served at 6:30 PM.",
    contact: "<strong>Baby G</strong> for ALL your Lodge Needs",
    moreInfo: "Dress code: collared shirts, long pants, closed toe shoes. Officers wear tuxedos."
  },
  {
    title: "12 Days of Christmas Raffle",
    date: "December 15, 2025",
    time: "6:00 PM",
    details: "Winning tickets are drawn nightly at 6:00 PM, starting 12 days before Christmas.",
    contact: "Brother Rufus Rogers"
  },
  /* start example */
  {
    title: "example event",
    date: "December 5, 2025",
    time: "7:30 PM",
    location: "Fergus Lodge",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et orci. Maecenas et dictum sapien.",
    contact: "<strong>Baby G</strong> for ALL your Lodge Needs",
    moreInfo: "fancey beach wear, flip-flopps,tank-t and shorts."
  },
  /* end example */ 
  {
    title: "Event FAQs",
    customHTML: `
      <div class="event-faq">
        <h5>Event FAQs</h5>
        <ul>
          <li><strong>Do I need to RSVP?</strong> No RSVP is required for regular meetings.</li>
          <li><strong>Is dinner provided?</strong> Yes, dinner is served at 6:30 PM before the meeting.</li>
          <li><strong>What should I wear?</strong> Collared shirts, long pants, and closed-toe shoes. Officers wear tuxedos.</li>
        </ul>
      </div>
    `
  }
];

// 🔹 Lodge Fundraisers
const lodgeEvents = [
  {
    title: "12 Days of Christmas Raffle",
    cause: "All proceeds go to Country Kids in Walton County",
    details: "Tickets are $10 — each ticket has up to 12 chances to win. nightly drawing is a 6:00pm",
    contact: "Reach out to members of Fergus Lodge for tickets"
  },
  {
    title: "Brunswick Stew and BBQ Cook",
    details: "Dates to be announced. Brunswick Stew is pre-order.",
    pricing: "Brunswick Stew $10/quart, BBQ $10/pound",
    form: {
      label: "Pre-Order Brunswick Stew & BBQ",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSer9Gsq46zm8evcHcnPzg8DRwav_0IzlMwKDgo295KvRxWM_A/viewform"
    }
  }
];

// 🔹 Render Scheduled Events
const calendarContainer = document.getElementById("calendar");

function createEventCard(event, index) {
  const card = document.createElement("div");
  card.className = "calendar-card";
  card.style.animationDelay = `${0.2 + index * 0.2}s`;

  const titleHTML = `<h4>${event.title}</h4>`;

  if (event.customHTML) {
    card.innerHTML = `${titleHTML}${event.customHTML}`;
  } else {
    const fields = [
      { label: "Date", value: event.date },
      { label: "Time", value: event.time },
      { label: "Location", value: event.location },
      { label: "Details", value: event.details },
      { label: "Contact", value: event.contact },
      { label: "More Info", value: event.moreInfo }
    ];

    const contentHTML = fields
      .filter(field => field.value)
      .map(field => `<p><strong>${field.label}:</strong> ${field.value}</p>`)
      .join("");

    card.innerHTML = `${titleHTML}${contentHTML}`;
  }

  return card;
}

if (calendarContainer) {
  calendarEvents.forEach((event, index) => {
    const card = createEventCard(event, index);
    calendarContainer.appendChild(card);
  });
}

// 🔹 Render Lodge Fundraisers
const eventContainer = document.getElementById("event-container");

if (eventContainer) {
  lodgeEvents.forEach((event, index) => {
    const card = document.createElement("div");
    card.className = "calendar-card";
    card.style.animationDelay = `${0.2 + index * 0.2}s`;

    card.innerHTML = `
      <h4>${event.title}</h4>
      ${event.cause ? `<p><strong>Cause:</strong> ${event.cause}</p>` : ""}
      ${event.details ? `<p><strong>Details:</strong> ${event.details}</p>` : ""}
      ${event.contact ? `<p><strong>Contact:</strong> ${event.contact}</p>` : ""}
      ${event.pricing ? `<p><strong>Pricing:</strong> ${event.pricing}</p>` : ""}
      ${event.form ? `
        <div class="stew-form">
          <h5>${event.form.label}</h5>
          <p>Click below to pre-order:</p>
          <a href="${event.form.url}" target="_blank" class="stew-order-btn">Open Pre-Order Form</a>
        </div>` : ""}
    `;

    eventContainer.appendChild(card);
  });
}