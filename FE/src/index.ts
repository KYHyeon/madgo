import MadgoView from "./view/MadgoView.js"
import Labels from "./model/Labels.js"

$.when(Labels.getLabelJson()).done(() => {   // lazy init
    new MadgoView().render()
})