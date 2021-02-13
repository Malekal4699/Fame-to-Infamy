
function loadRep() {
  
    prtc("LoadRep Loaded");
    let myJournalID = randomID(16);
    let ftiRuleJournal = {
        "name" : "Fame to Infamy - Homebrew Rules",
        "content" : "Rule Content"        
    };
  
    if (!game.journal.getName(ftiRuleJournal.name)){
        prtc("Creating Journal");
        let newEntry = JournalEntry.create(ftiRuleJournal);
        /* let myJournalEntry = new JournalEntry(ftiRuleJournal,{});
        myJournalEntry.cre
        game.journal.insert(myJournalEntry);
        game.journal.render();
        game.journal. */
        console.log(myJournalEntry);
    }
    else
        prtc("Journal already exist.");
    
}
