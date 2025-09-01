import { beforeEach, describe, expect, it, vi } from 'vitest';
import {MorningRoutineReminder} from "../src/morning-routine-reminder";

describe('morning routine reminder should', () => {
    it('return No activity when time is after 09:00am', () => {
        const reminderText = MorningRoutineReminder.getReminderText();
        expect(reminderText).toBe('No activity');
    });
  });