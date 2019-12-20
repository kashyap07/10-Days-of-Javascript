// Bitwise Operators

const getMaxLessThanK = (n, k) => {
    let max = 0;

    for (let i=0; i<=n; ++i) {
        for (let j=i+1; j<=n; ++j) {
            let iAndj = i&j;
            if (iAndj < k && iAndj > max) {
                max = iAndj;
            }  
        }
    }
    
    return max;
}

// ------------------------------------------------------------------------------------------------

// JavaScript Dates

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here

    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    dayName = days[new Date(dateString).getDay()]
    
    return dayName;
}
