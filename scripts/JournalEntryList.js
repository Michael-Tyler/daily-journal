  import { useJournalEntries } from "./JournalDataProvider.js"
  import { journalEntryComponent } from "./JournalEntry.js";

  const journalLog = document.querySelector("#entryLog")

  export const EntryListComponent = () => {

      const entries = useJournalEntries()

      journalLog.innerHTML += `
      <article class="journal__entries">
    ${
      entries.map(entry => 
        journalEntryComponent(entry)
        ).join("")
    }
      </article>
    `

  }