  import { useJournalEntries, getJournalEntries } from "./JournalDataProvider.js"
  import { journalEntry } from "./JournalEntry.js";

  const journalLog = document.querySelector(".journal__entries")
  const eventHub = document.querySelector(".container")

  eventHub.addEventListener("click", clickEvent => {
      if (clickEvent.target.id === "saveJournalEntry") {

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