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

//Overall Left Button CONTAINER
const buttonContainer = document.getElementById("button-container")
const buttonContainerArray = buttonContainer.children

//Individual policy area button containers
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
  hideButtonsAndRemoveActive()
  governanceRiskAndComplianceButton.classList.add("active")
  governanceRiskAndComplianceContainer.style.display = "block"
})

informationAssetManagementButton.addEventListener("click", () => {
  hideButtonsAndRemoveActive()
  informationAssetManagementButton.classList.add("active")
  informationAssetManagementContainer.style.display = "block"
})

informationTechnologyButton.addEventListener("click", () => {
  hideButtonsAndRemoveActive()
  informationTechnologyButton.classList.add("active")
  informationTechnologyContainer.style.display = "block"
})

peopleButton.addEventListener("click", () => {
  hideButtonsAndRemoveActive()
  peopleButton.classList.add("active")
  peopleContainer.style.display = "block"
})

physicalAndEnvironmentalButton.addEventListener("click", () => {
  hideButtonsAndRemoveActive()
  physicalAndEnvironmentalButton.classList.add("active")
  physicalAndEnvironmentalContainer.style.display = "block"
})

resilienceButton.addEventListener("click", () => {
  hideButtonsAndRemoveActive()
  resilienceButton.classList.add("active")
  resilienceContainer.style.display = "block"
})

// ================================================================================
// FUNCTIONS
// ================================================================================

// FUNCTION TO HIDE ALL BUTTON CONTAINER ELEMENTS ON LEFT HAND SIDE
// AND TO REMOVE ACTIVE CLASS ON TOP BUTTONS

function hideButtonsAndRemoveActive() {
  for (let i = 0; i < buttonContainerArray.length; i++ ){
    buttonContainerArray[i].style.display = "none"
  }
  for (let i = 0; i < policyAreasContainerButtons.length; i++) {
    policyAreasContainerButtons[i].classList.remove("active")
  }
}
