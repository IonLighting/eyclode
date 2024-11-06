let activeBubble = 1;
const descriptions = {
  1: "Query management helps handle and prioritize user queries effectively.dffdfdfgdsfgsfgsdf fffffffffffffff ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffgfdgfdgdfgdfgdgfgdfgdfgdgdfgdfgdfgdgfgdfgdfgdfgd",
  2: "EY Certification provides valuable credentials recognized globally.fgdgdfgdfgdfgdgfgdfgdfgdgdfgdfgdf gdfg",
  3: "Knowledge testing assessments evaluate your understanding in key areas.",
  4: "Hands-on experience offers practical exposure and real-world applications.",
  5: "A well-structured agenda ensures a logical and smooth learning flow.",
  6: "Comprehensive coverage includes a wide range of relevant topics."
};

// Function to set active bubble
function setActiveBubble(index) {
  clearActiveBubble();
  activeBubble = index;
  document.getElementById(`bubble${index}`).classList.add('active');
  document.getElementById('activeText').innerText = descriptions[index].split(" ")[0];
  document.getElementById('description').innerText = descriptions[index];
}

// Function to clear the current active bubble
function clearActiveBubble() {
  document.querySelectorAll('.bubble').forEach(bubble => bubble.classList.remove('active'));
}

// Function to cycle through bubbles automatically every 8 seconds
function autoCycleBubbles() {
  setActiveBubble(activeBubble);
  activeBubble = activeBubble < 6 ? activeBubble + 1 : 1;
}

// Start the auto cycle
setInterval(autoCycleBubbles, 8000);
