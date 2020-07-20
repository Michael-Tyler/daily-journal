export const journalEntryComponent = (entry) => {
    return `
    <section id="entry--${entry.id}" class="journalEntry">
    <h3 class="concept">${entry.concept}</h3>        
    <div class="entry">${entry.entry}</div>
    <div class="date">${entry.date}</div>
</section>
    `
}