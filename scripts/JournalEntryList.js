import { useJournalEntries, getJournalEntries, deleteJournalEntry } from "./JournalDataProvider.js"
import { journalEntry } from "./JournalEntry.js";
import { useMoods } from "./MoodDataProvider.js";

const journalLog = document.querySelector(".journal__entries")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("journalStateChanged", () => {
    EntryListComponent()
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        const deleteEvent = new CustomEvent("deleteButtonClicked", {
                detail: {
                    chosenEntry: id
                }
            })
            /*
                Invoke the function that performs the delete operation.

                Once the operation is complete you should THEN invoke
                useNotes() and render the note list again.
            */
        deleteJournalEntry(id).then(
            () => {
                const updatedEntries = useJournalEntries()
                const moods = useMoods()
                render(updatedEntries, moods)
            }
        )
    }
})

const render = (arrayOfJournalEntries) => {
    const allEntriesConvertedToStrings = arrayOfJournalEntries.map(
        (currentEntry) => {
            return journalEntry(currentEntry)
        }
    ).join("")
    journalLog.innerHTML = allEntriesConvertedToStrings
}



export const EntryListComponent = () => {
    getJournalEntries()
        .then(() => {
            const journalEntryArray = useJournalEntries()
            render(journalEntryArray)
        })
}