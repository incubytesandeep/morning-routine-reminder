export class MorningRoutineReminder {
    public static getReminderText(timeString: Date) {
        const hour = timeString.getHours();
        if(hour === 6) {
            return 'Do exercise';
        } else if (hour === 7) {
            return 'Read and study';
        } else if (hour === 8) {
            return 'Have breakfast';
        }
        return 'No activity';
    }
}