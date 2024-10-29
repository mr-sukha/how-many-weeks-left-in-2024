function calculateWeeks() {
    const today = new Date();
    const endOfYear = new Date(today.getFullYear(), 11, 31);
    let weeksLeft = 0;
  
    // Counting each Sunday as a week
    for (let day = today; day <= endOfYear; day.setDate(day.getDate() + 1)) {
      if (day.getDay() === 0) weeksLeft++; // Sundays count as weeks
    }
  
    document.getElementById('weekDisplay').textContent = `Weeks left in 2024: ${weeksLeft}`;
  }
  