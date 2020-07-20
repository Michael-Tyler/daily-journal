import { useJournalEntries } from "./JournalDataProvider.js"
import { journalEntryComponent } from "./JournalEntry.js";

const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = () => {
    let entryHTMLReprsentation = ""
    const entries = useJournalEntries()

    for (const entry of entries) {
        entryHTMLReprsentation += journalEntryComponent(entry)
    }

    entryLog.innerHTML += `
    ${entryHTMLReprsentation}
    `
}