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
const totalPolicyButtons = document.getElementsByClassName("policy-button")

//Individual policy area button containers
const governanceRiskAndComplianceContainer = document.getElementById("governance-risk-and-compliance-button-container")
const informationAssetManagementContainer = document.getElementById("information-asset-management-button-container")
const informationTechnologyContainer = document.getElementById("information-technology-button-container")
const peopleContainer = document.getElementById("people-button-container")
const physicalAndEnvironmentalContainer = document.getElementById("physical-and-environmental-button-container")
const resilienceContainer = document.getElementById("resilience-button-container")

// ================================================================================
// RIGHT TEXT CONTAINER VARIABLES
// ================================================================================

const totalPolicyText = document.getElementsByClassName("policy-text")






// ================================================================================
// TOP HORIZONTAL POLICY LIST EVENT LISTENERS
// ================================================================================

policyAreasContainer.addEventListener("click", (e) => {
  categoryAreaClick(e)
  topButtonClick(e)
})

// ================================================================================
// LEFT VERTICAL BUTTON EVENT LISTENERS
// ================================================================================

buttonContainer.addEventListener("click", (e) => {
  if(e.target.classList.contains("btn")) {
    leftButton()
    e.target.classList.add("active")
  }
  policyButtonClick(e)
})

// ================================================================================
// FUNCTIONS
// ================================================================================

// FUNCTION FOR ADDING OR REMOVING ACTIVE CLASS ON LEFT VERTICAL BUTTONS

function leftButton() {
  for (let i = 0; i < buttonContainerArray.length; i++) {
    for (let j = 0; j < buttonContainerArray[i].children.length; j++){
        buttonContainerArray[i].children[j].classList.remove("active")
    }}
  }

// FUNCTION FOR TOP HORIZONTAL CATEOGRY AREA BUTTON CLICK

function topButtonClick(e) {
    e.target.classList.add("active")
  for (let i = 0; i < policyAreasContainerButtons.length; i++) {
    buttonContainerArray[i].style.display = "none"

  }
  for (let j = 0; j < policyAreasContainerButtons.length; j++) {
    if(policyAreasContainerButtons[j].classList.contains("active")) {
      buttonContainerArray[j].style.display = "block"
    }
  }
}

function categoryAreaClick(e) {
  for (let i = 0; i < policyAreasContainerButtons.length; i++) {
    policyAreasContainerButtons[i].classList.remove("active")
  }
}

// FUNCTION FOR CLICKING ON INDIVIDUAL POLICIES ON LEFT SIDE OF SCREEN
function policyButtonClick(e) {
  for (let i = 0; i < totalPolicyButtons.length; i++) {
      totalPolicyText[i].style.display = "none"
    }
  for (let i = 0; i < totalPolicyButtons.length; i++)
    if(totalPolicyButtons[i].classList.contains("active")) {
      totalPolicyText[i].style.display = "block"
    }
  }
