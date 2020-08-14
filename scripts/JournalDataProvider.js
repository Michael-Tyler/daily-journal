let journal = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

export const getJournalEntries = () => {
    return fetch("http://localhost:3000/entries?_expand=mood")
        .then(response => response.json())
        .then(parsedEntries =>
            journal = parsedEntries)
}

export const useJournalEntries = () => {
    return journal.slice()
}

export const saveJournalEntry = (newJournalEntry) => {
    fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
        .then(getJournalEntries)
        .then(dispatchStateChangeEvent)
}

export const deleteJournalEntry = (journalEntryObj) => {
    return fetch(`http://localhost:8088/notes/${journalEntryObj.id }`, {
            method: "DELETE"
        })
        .then(getJournalEntries)
}