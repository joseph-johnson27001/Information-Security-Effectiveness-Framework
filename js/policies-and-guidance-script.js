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











const totalPolicyButtons = document.getElementsByClassName("policy-button")

const totalPolicyText = document.getElementsByClassName("policy-text")


function policyButtonClick(e) {

for (let i = 0; i < totalPolicyButtons.length; i++) {
    totalPolicyText[i].style.display = "none"
  }
  for (let i = 0; i < totalPolicyButtons.length; i++)
    if(totalPolicyButtons[i].classList.contains("active")) {
      totalPolicyText[i].style.display = "block"
    }
  }








// ================================================================================
// TOP HORIZONTAL POLICY LIST EVENT LISTENERS
// ================================================================================

governanceRiskAndComplianceButton.addEventListener("click", (e) => {
  categoryAreaClick(e)
  governanceRiskAndComplianceContainer.style.display = "block"
})

informationAssetManagementButton.addEventListener("click", (e) => {
  categoryAreaClick(e)
  informationAssetManagementContainer.style.display = "block"
})

informationTechnologyButton.addEventListener("click", (e) => {
  categoryAreaClick(e)
  informationTechnologyContainer.style.display = "block"
})

peopleButton.addEventListener("click", (e) => {
  categoryAreaClick(e)
  peopleContainer.style.display = "block"
})

physicalAndEnvironmentalButton.addEventListener("click", (e) => {
  categoryAreaClick(e)
  physicalAndEnvironmentalContainer.style.display = "block"
})

resilienceButton.addEventListener("click", (e) => {
  categoryAreaClick(e)
  resilienceContainer.style.display = "block"
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

function categoryAreaClick(e) {
  for (let i = 0; i < buttonContainerArray.length; i++ ){
    buttonContainerArray[i].style.display = "none"
  }
  for (let i = 0; i < policyAreasContainerButtons.length; i++) {
    policyAreasContainerButtons[i].classList.remove("active")
  }
    e.target.classList.add("active")
}
