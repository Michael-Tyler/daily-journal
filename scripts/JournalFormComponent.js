const componentTarget = document.querySelector(".JournalForm")

export const JournalForm = () => {
    componentTarget.innerHTML =
        `<h2 class="journal">Daily Journal</h2>
<form action="">
        <fieldset>
            <label for="journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate">
            <label for="journalConcepts">Concepts covered</label>
            <input type="text" name="journalConcepts" id="journalConcepts">
            <label for="journalEntry">Journal Entry</label>
            <textarea name="journalEntry" id="journalEntry" cols="30" rows="5"></textarea>
            <label for="moodSelecet">Mood:</label>
            <select name="moodSelect" id="moodSelect">
                <option value="Great">Great</option>
                <option value="good">good</option>
                <option value="Fair">fair</option>
                <option value="Not good">bad</option>
                <option value="Very Bad">Not Okay</option>
            </select>
            <button>Record Journal Entry</button>
        </fieldset>
    </form>
    `
}