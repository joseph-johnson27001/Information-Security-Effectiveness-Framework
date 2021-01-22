// ================================================================================
// VARIABLES
// ================================================================================

// ================================================================================
// TOP HORIZONTAL POLICY LIST VARIABLES
// ================================================================================

// TOP OVERALL POLICY CONTAINER
const policyAreasContainer = document.getElementById("policy-areas-container")

// ARRAY FOR TOP CONTAINER'S BUTTONS
const policyAreasContainerButtons = policyAreasContainer.children

// ================================================================================
// LEFT CONTAINER VARIABLES
// ================================================================================

const buttonContainer = document.getElementById("button-container")
const buttonContainerArray = buttonContainer.children

// ALL INDIVIDUAL POLICY BUTTONS
const totalPolicyButtons = document.getElementsByClassName("policy-button")

// ================================================================================
// RIGHT TEXT CONTAINER VARIABLES
// ================================================================================

// MAIN TEXT CONTENT CONTAINER
const totalPolicyText = document.getElementsByClassName("policy-text")

// ================================================================================
// TOP HORIZONTAL POLICY LIST EVENT LISTENERS
// ================================================================================

policyAreasContainer.addEventListener("click", (e) => {
  if(e.target.classList.contains("btn")) {
    topButtonClick(e)
  }
})

// ================================================================================
// LEFT VERTICAL BUTTON EVENT LISTENERS
// ================================================================================

buttonContainer.addEventListener("click", (e) => {
  if(e.target.classList.contains("btn")) {
    leftButton(e)
  }
  policyButtonClick(e)
})

// ================================================================================
// FUNCTIONS
// ================================================================================

// FUNCTION FOR ADDING OR REMOVING ACTIVE CLASS ON LEFT VERTICAL BUTTONS

function leftButton(e) {
  for (let i = 0; i < buttonContainerArray.length; i++) {
    for (let j = 0; j < buttonContainerArray[i].children.length; j++){
        buttonContainerArray[i].children[j].classList.remove("active")
    }}
      e.target.classList.add("active")
  }

// FUNCTION FOR TOP HORIZONTAL CATEOGRY AREA BUTTON CLICK

function topButtonClick(e) {
  for (let i = 0; i < policyAreasContainerButtons.length; i++) {
    buttonContainerArray[i].style.display = "none"
  }
  for (let j = 0; j < policyAreasContainerButtons.length; j++) {
        policyAreasContainerButtons[j].classList.remove("active")
        e.target.classList.add("active")
    if(policyAreasContainerButtons[j].classList.contains("active")) {
      buttonContainerArray[j].style.display = "block"
    }
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
