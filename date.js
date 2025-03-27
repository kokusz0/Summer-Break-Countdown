// date.js

function getCurrentDate() {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Get current month (1-12)
    const year = today.getFullYear();
    
    return `${day}-${month}-${year}`; // Format: day-month-year (e.g., 27-03-2025)
}
