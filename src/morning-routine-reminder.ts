export class MorningRoutineReminder {
    public static getReminderText(timeString: Date) {
        const hour = timeString.getHours();
        const minute = timeString.getMinutes();
        console.log(`Hour: ${hour}, Minute: ${minute}`);
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