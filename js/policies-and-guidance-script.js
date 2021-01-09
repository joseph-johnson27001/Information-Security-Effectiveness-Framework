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

//OVERALL CONTAINER
const policyAreasContainer = document.getElementById("policy-areas-container")

// BUTTONS

//All Buttons Array
const policyAreasContainerButtons = policyAreasContainer.children

//Individual Buttons
const governanceRiskAndComplianceButton = document.getElementById("governance-risk-and-compliance-button")
const informationAssetManagementButton = document.getElementById("information-asset-management-button")
const informationTechnologyButton = document.getElementById("information-technology-button")
const peopleButton = document.getElementById("people-button")
const physicalAndEnvironmentalButton = document.getElementById("physical-and-environmental-button")
const resilienceButton = document.getElementById("resilience-button")

// ================================================================================
// LEFT CONTAINER VARIABLES
// ================================================================================
const governanceRiskAndComplianceContainer = document.getElementById("governance-risk-and-compliance-button-container")
const informationAssetManagementContainer = document.getElementById("information-asset-management-button-container")
const informationTechnologyContainer = document.getElementById("information-technology-button-container")
const peopleContainer = document.getElementById("people-button-container")
const physicalAndEnvironmentalContainer = document.getElementById("physical-and-environmental-button-container")
const resilienceContainer = document.getElementById("resilience-button-container")

// ================================================================================
// TOP HORIZONTAL POLICY LIST EVENT LISTENERS
// ================================================================================

governanceRiskAndComplianceButton.addEventListener("click", () => {
  removeActive()
  governanceRiskAndComplianceButton.classList.add("active")
  hideButtons()
  governanceRiskAndComplianceContainer.style.display = "block"
})

informationAssetManagementButton.addEventListener("click", () => {
  removeActive()
  informationAssetManagementButton.classList.add("active")
  hideButtons()
  informationAssetManagementContainer.style.display = "block"
})

informationTechnologyButton.addEventListener("click", () => {
  removeActive()
  informationTechnologyButton.classList.add("active")
  hideButtons()
  informationTechnologyContainer.style.display = "block"
})

peopleButton.addEventListener("click", () => {
  removeActive()
  peopleButton.classList.add("active")
  hideButtons()
  peopleContainer.style.display = "block"
})

physicalAndEnvironmentalButton.addEventListener("click", () => {
  removeActive()
  physicalAndEnvironmentalButton.classList.add("active")
  hideButtons()
  physicalAndEnvironmentalContainer.style.display = "block"
})

resilienceButton.addEventListener("click", () => {
  removeActive()
  resilienceButton.classList.add("active")
  hideButtons()
  resilienceContainer.style.display = "block"
})

// ================================================================================
// FUNCTIONS
// ================================================================================

// FUNCTION TO HIDE ALL BUTTON CONTAINER ELEMENTS ON LEFT HAND SIDE

function hideButtons() {
  governanceRiskAndComplianceContainer.style.display = "none"
  informationAssetManagementContainer.style.display = "none"
  informationTechnologyContainer.style.display = "none"
  peopleContainer.style.display = "none"
  physicalAndEnvironmentalContainer.style.display = "none"
  resilienceContainer.style.display = "none"
}



function removeActive() {
  for (let i = 0; i < policyAreasContainerButtons.length; i++) {
    policyAreasContainerButtons[i].classList.remove("active")
  }
}
