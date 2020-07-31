export const journalEntry = (entryObj) => {
    return `
    <section id="entry--${entryObj.id}" class="journalEntry">
        <h3 class="concept">${entryObj.concept}</h3>        
        <div class="entry">${entryObj.entry}</div>
        <div class="date">${entryObj.date}</div>
    </section>
    `
}