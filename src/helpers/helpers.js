function formatDate(date) {
    const options = {
        weekday: 'long', // Full name of the weekday (e.g., "Monday")
        year: 'numeric', // Four-digit year (e.g., "2024")
        month: 'long',   // Full name of the month (e.g., "January")
        day: 'numeric'   // Day of the month (e.g., "12")
    };
    return date.toLocaleDateString('en-US', options);
}

// this funciton returns a list of dates where the first date is today's date and the last date is January 1, 2025
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

const getNUpcomingDates = (n, dayOfWeek) => {
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    const dates = [];
    let currentDate = new Date();

    // Find the next relevant day of week
    while (currentDate.getDay() !== daysOfWeek.indexOf(dayOfWeek.toLowerCase())) {
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // Add the next n days of week
    for (let i = 0; i < n; i++) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 7); // Move to next week
    }

    return dates.map(date => formatDate(date));
}

export {
    generateDateList,
    getNUpcomingDates,
}