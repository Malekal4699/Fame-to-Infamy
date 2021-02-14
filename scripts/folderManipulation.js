class folderManipulation {

    _ftiDefaultValues = [];

        _fetchJsonConfig(){
        response = fetch("/modules/Fame-to-Infamy/data/fticonfig.json");
        data =  response.json();
        this._ftiDefaultValues = data.constants;
    }

    _loadFolder(myFolder) {
        if (!game.folders.getName(myFolder.name)) {
            prtc(`Creating Journal Folder "${myFolder.name}"`);
            Folder.create(myFolder);
        }
        else
            prtc("Folder Already Exist.");
    }
    _loadJournalEntry(myObject) {
        if (!game.journal.getName(myObject.name)) {
            prtc(`Creating Journal Entry ${myObject.name}`);
            JournalEntry.create(myObject);
        } else
            prtc("Journal Entry already exist.");
    }

    constructor() {
        this._fetchJsonConfig();
        this._loadFolder(this._ftiDefaultValues[0]);
        this._loadJournalEntry(this._ftiDefaultValues[1]);
        this._loadJournalEntry(this._ftiDefaultValues[2]);
        console.log(this._ftiDefaultValues);
    }
}