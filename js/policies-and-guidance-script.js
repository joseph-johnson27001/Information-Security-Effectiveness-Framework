// ================================================================================
// VARIABLES
// ================================================================================

const acceptableUseButton = document.getElementById("acceptable-use-button")
const accessControlButton = document.getElementById("access-control-button")
const acceptableUsePolicyArea = document.getElementById("acceptable-use-policy-area")
const accessControlPolicyArea = document.getElementById("access-control-policy-area")

// ================================================================================
// TOP HORIZONTAL POLICY LIST VARIABLES
// ================================================================================

// BUTTONS
const governanceRiskAndComplianceButton = document.getElementById("governance-risk-and-compliance-button")
const informationAssetManagementButton = document.getElementById("information-asset-management-button")

// CONTAINERS

const governanceRiskAndComplianceContainer = document.getElementById("governance-risk-and-compliance-button-container")
const informationAssetManagementContainer = document.getElementById("information-asset-management-button-container")

// ================================================================================
// TOP HORIZONTAL POLICY LIST EVENT LISTENERS
// ================================================================================

governanceRiskAndComplianceButton.addEventListener("click", () => {
  informationAssetManagementContainer.style.display = "none"
  governanceRiskAndComplianceContainer.style.display = "block"
})

informationAssetManagementButton.addEventListener("click", () => {
  governanceRiskAndComplianceContainer.style.display = "none"
  informationAssetManagementContainer.style.display = "block"
})


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
