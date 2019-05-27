export function calculateAge(today, birthDay) {
    const birthDayMonth = birthDay.getMonth();
    const birthDayDay = birthDay.getDate();
    const presentDay = today.getDate();
    const presentMonth = today.getMonth();
    let age = today.getFullYear() - birthDay.getFullYear();
    if (presentMonth < birthDayMonth ||
        (presentMonth === birthDayMonth && presentDay < birthDayDay)) {
        age--
    }
    return age;
}
