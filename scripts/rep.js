function loadRep() {
    prtc("LoadRep Loaded");
    let myJournalID = randomID(16);
    let myJournalSheetID = randomID(16);
    
    let mySheet = new JournalSheet(new Application());

    let ftiRuleJournal = {
        "id" : myJournalID,
        "uuid " : myJournalID ,
        "name" : "Fame to Infamy - Homebrew Rules",
        "content" : "Rule Content",
        "sheet" : mySheet
    };
    

    if (!game.journal.getName(ftiRuleJournal.name)){
        prtc("Creating Journal");
        let myJournalEntry = new JournalEntry(ftiRuleJournal);
        game.journal.insert(myJournalEntry);
        game.journal.render();
    }
    else
        prtc("Journal already exist.");

    
}
