  import { useJournalEntries } from "./JournalDataProvider.js"
  import { journalEntryComponent } from "./JournalEntry.js";

  const entryLog = document.querySelector("#entryLog")

  export const EntryListComponent = () => {

      const entries = useJournalEntries()

      entryLog.innerHTML += `
      <article class="journal__entries">
    ${
      entries.map(entry => 
        journalEntryComponent(entry)
        ).join("")
    }
      </article>
    `

  }

  // import { useJournalEntries } from "./JournalDataProvider.js"
  // import { journalEntryComponent } from "./JournalEntry.js";

  // const entryLog = document.querySelector("#entryLog")

  // export const EntryListComponent = () => {
  //     const entries = useJournalEntries()


  //     const entryHTMLReprsentation = entries.map(journalEntryComponent).join("")


  //     entryLog.innerHTML += `
  //     <article class="journal__entries">
  //   ${entryHTMLReprsentation}
  //     </article>
  //   `

  // }