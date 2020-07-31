import { EntryListComponent } from "./JournalEntryList.js";
import { JournalForm } from "./JournalFormComponent.js";
import { useJournalEntries } from "./JournalDataProvider.js";

const allTheEntries = useJournalEntries()
console.log(allTheEntries)
JournalForm()
EntryListComponent()