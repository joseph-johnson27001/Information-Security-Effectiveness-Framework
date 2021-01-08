// ================================================================================
// VARIABLES
// ================================================================================

const acceptableUseButton = document.getElementById("acceptable-use-button")
const accessControlButton = document.getElementById("access-control-button")
const acceptableUsePolicyArea = document.getElementById("acceptable-use-policy-area")
const accessControlPolicyArea = document.getElementById("access-control-policy-area")

// ================================================================================
// EVENT LISTENERS
// ================================================================================

acceptableUseButton.addEventListener("click", () => {
  acceptableUseButton.classList.add("active")
  accessControlButton.classList.remove("active")
  acceptableUsePolicyArea.style.display = "block"
  accessControlPolicyArea.style.display = "none"
})

accessControlButton.addEventListener("click", () => {
  acceptableUseButton.classList.remove("active")
  accessControlButton.classList.add("active")
  acceptableUsePolicyArea.style.display = "none"
  accessControlPolicyArea.style.display = "block"
})
