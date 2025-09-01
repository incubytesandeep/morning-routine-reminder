import { describe, expect, it} from 'vitest';
import {MorningRoutineReminder} from "../src/morning-routine-reminder";

describe('morning routine reminder should', () => {

    it('return No activity when time is after 09:00am', () => {
        const time = new Date("2025-01-01T09:01:00");
        const reminderText = MorningRoutineReminder.getReminderText(time);
        expect(reminderText).toBe('No activity');
    });

    it('return No activity when time is on or before 05:59am', () => {
        const time = new Date("2025-01-01T05:59:00");
        const reminderText = MorningRoutineReminder.getReminderText(time);
        expect(reminderText).toBe('No activity');
    });

    it('return Do exercise when time is between 06:00am and 06:59am', () => {
        const time = new Date("2025-01-01T06:00:00");
        const reminderText = MorningRoutineReminder.getReminderText(time);
        expect(reminderText).toBe('Do exercise');
    });


    it('return Read and study when time is between 07:00am and 07:59am', () => {
        const time = new Date("2025-01-01T07:00:00");
        const reminderText = MorningRoutineReminder.getReminderText(time);
        expect(reminderText).toBe('Read and study');
    });

    it('return Have breakfast when time is between 08:00am and 08:59am', () => {
        const time = new Date("2025-01-01T08:00:00");
        const reminderText = MorningRoutineReminder.getReminderText(time);
        expect(reminderText).toBe('Have breakfast');
    });
  });