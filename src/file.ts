import { normalizePath, Vault } from 'obsidian';
import MomentDateRegex from './moment-date-regex';
import { DayPlannerSettings, NoteForDateQuery } from './settings';
import { getAllDailyNotes, getDailyNote, getDailyNoteSettings } from "obsidian-daily-notes-interface";


export default class DayPlannerFile {
    vault: Vault;
    settings: DayPlannerSettings;
    momentDateRegex: MomentDateRegex;
    noteForDateQuery: NoteForDateQuery;

    constructor(vault: Vault, settings: DayPlannerSettings){
        this.vault = vault;
        this.settings = settings;
        this.momentDateRegex = new MomentDateRegex();
        this.noteForDateQuery = new NoteForDateQuery();
    }


    todayPlannerFilePath(): string {
        const b = getDailyNote(window.moment(), getAllDailyNotes()).basename;
        const f = getDailyNoteSettings().folder;
        return normalizePath(`${f}/${b}`);
    }

    hasTodayNote(): boolean {
        const filename = this.todayPlannerFilePath();
        if (!filename) {
            return false
        }
        return true
    }

    async getFileContents(){
        if (!this.hasTodayNote()) {
            return ""
        }
        try {
            return await this.vault.adapter.read(this.todayPlannerFilePath());
        } catch (error) {
            console.log(error)
        }
    }
}
