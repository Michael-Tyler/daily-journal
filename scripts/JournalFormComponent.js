import { saveJournalEntry } from "./JournalDataProvider.js"
import { useMoods, getMoods } from "./MoodDataProvider.js"

const eventHub = document.querySelector(".container")
const componentTarget = document.querySelector(".JournalForm")

eventHub.addEventListener("click", clickevent => {
    if (clickevent.target.id === "saveJournalEntry") {

        const journalDate = document.querySelector("#journalDate")
        const journalConcept = document.querySelector("#journalConcept")
        const journalEntry = document.querySelector("#journalEntry")
        const moodSelect = document.querySelector("#moodSelect")

        let mood = parseInt(moodSelect.value)
        let concept = journalConcept.value
        let entry = journalEntry.value
        if (mood !== 0 && concept !== "" && entry !== "") {
            const newEntry = {
                date: journalDate.value,
                concept: journalConcept.value,
                entry: journalEntry.value,
                moodId: moodSelect.value
            }
            saveJournalEntry(newEntry)

        } else {
            window.alert("Fill out the form, You obviously missed something....stupid.")
        }
    }

})

const render = (moodCollection) => {
        componentTarget.innerHTML =
            `<h2 class="journal">Daily Journal</h2>
        
        <fieldset>
            <label for="journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate" required>
            <label for="journalConcepts">Concepts covered</label>
            <input type="text" name="journalConcept" id="journalConcept" autoComplete="off" required>
            <label for="journalEntry">Journal Entry</label>
            <textarea name="journalEntry" id="journalEntry" cols="30" rows="5"></textarea>
            <label for="moodSelecet">Mood:</label>
            <select name="moodSelect" id="moodSelect">
            <option value="0">How you feeling?</option>
                ${
                    moodCollection.map(
                        moodObj => {
                       return `<option value="${moodObj.id}">${moodObj.label}</option>`
                    }).join("")
}
            </select>
            <button id="saveJournalEntry">Record Journal Entry</button>
        </fieldset>
        
    
    `
}

export const JournalForm = () => {
    getMoods().then(() =>{
        render(useMoods())
    })
}