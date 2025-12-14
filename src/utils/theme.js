export function getCurrentSeason() {
    const month = new Date().getMonth() + 1; // 1-12

    // Spring: March, April, May
    if (month >= 3 && month <= 5) return 'spring';

    // Summer: June, July, August
    if (month >= 6 && month <= 8) return 'summer';

    // Autumn: September, October, November
    if (month >= 9 && month <= 11) return 'autumn';

    // Winter: December, January, February
    return 'winter';
}
