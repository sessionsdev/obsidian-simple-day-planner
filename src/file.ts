import { now } from 'moment';
import { Vault, normalizePath } from 'obsidian';
import { DAY_PLANNER_DEFAULT_CONTENT, DAY_PLANNER_FILENAME } from './constants';
import MomentDateRegex from './moment-date-regex';
import { DayPlannerSettings, NoteForDateQuery } from './settings';
import {
    createDailyNote,
    getDailyNote,
} from "obsidian-daily-notes-interface";
import moment from 'moment';
  

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
        return getDailyNote(moment(new Date()));
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
            // TODO Create if not exist or return empty?
            return ""
        }
        try {
            return await this.vault.adapter.read(this.todayPlannerFilePath());
        } catch (error) {
            console.log(error)
        }
    }
}
