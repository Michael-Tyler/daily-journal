/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [{
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    }, {
        id: 2,
        date: "07/13/2020",
        concept: "group project",
        entry: "Today we completed and presented our group project.  I thought it went great. Worked very well with the team.",
        mood: "Great"
    }, {
        id: 3,
        date: "07/14/2020",
        concept: "javascript first day",
        entry: "We learned about moduler javascript. We took a function returning HTML and used interpolation and looping to put new html in the dom. I still don't get it all",
        mood: "Not good"
    }, {
        id: 4,
        date: "07/16/2020",
        concept: "practicing with more javascript",
        entry: "My floors were being redone and the day was noisy.  Trying to practice Javascript while saws and drills were going off is quite difficult.  I'm understanding more but my head hurts.",
        mood: "very bad"
    }]
    /*
        You export a function that provides a version of the
        raw data in the format that you want
    */
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
        Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}