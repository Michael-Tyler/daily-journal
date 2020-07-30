let journal = []

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