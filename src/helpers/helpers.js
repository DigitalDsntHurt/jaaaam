function formatDate(date) {
    const options = {
        weekday: 'long', // Full name of the weekday (e.g., "Monday")
        year: 'numeric', // Four-digit year (e.g., "2024")
        month: 'long',   // Full name of the month (e.g., "January")
        day: 'numeric'   // Day of the month (e.g., "12")
    };
    return date.toLocaleDateString('en-US', options);
}

function generateDateList() {
    const startDate = new Date(); // Today's date
    const endDate = new Date('2025-01-01'); // January 1, 2025
    const dateList = [];

    while (startDate <= endDate) {
        dateList.push(formatDate(startDate));
        startDate.setDate(startDate.getDate() + 1);
    }
    return dateList;
}

export {
    generateDateList,
}