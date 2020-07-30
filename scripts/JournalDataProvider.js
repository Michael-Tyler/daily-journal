let journal = []
const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

export const getJournalEntries = () => {
    fetch("http://localhost:3000/entries")
        .then(response => response.json())
        .then(parsedEntries =>
            journal = parsedEntries)
}

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
        Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const saveJournalEntry = (newJournalEntry) => {
    fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
        .then(useJournalEntries())
        .then(dispatchStateChangeEvent())
}