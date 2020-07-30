import { saveJournalEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")
const componentTarget = document.querySelector(".JournalForm")

eventHub.addEventListener("click", clickevent => {
    if (clickevent.target.id === "saveJournalEntry") {

        const journalDate = document.querySelector("#journalDate")
        const journalConcepts = document.querySelector("#journalConcepts")
        const journalEntry = document.querySelector("#journalEntry")
        const moodSelect = document.querySelector("#moodSelect")


        const newEntry = {
            date: journalDate.value,
            concept: journalConcept.value,
            entry: journalEntry.value,
            mood: moodSelect.value
        }
        saveJournalEntry(newEntry)
    }
})

export const JournalForm = () => {
    componentTarget.innerHTML =
        `<h2 class="journal">Daily Journal</h2>
<form action="">
        <fieldset>
            <label for="journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate">
            <label for="journalConcepts">Concepts covered</label>
            <input type="text" name="journalConcept" id="journalConcept" autoComplete="off">
            <label for="journalEntry">Journal Entry</label>
            <textarea name="journalEntry" id="journalEntry" cols="30" rows="5"></textarea>
            <label for="moodSelecet">Mood:</label>
            <select name="moodSelect" id="moodSelect">
                <option value="Great">Great</option>
                <option value="good">good</option>
                <option value="Fair">fair</option>
                <option value="Not good">bad</option>
                <option value="Very Bad">Not Okay</option>
            </select>
            <button id="saveJournalEntry">Record Journal Entry</button>
        </fieldset>
    </form>
    `
}