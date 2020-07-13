export function compareNumbers(player, computer) {
    if (player === computer) {
        return 0;}
    if (player < computer) {
        return -1;}
    if (player > computer) {
        return 1;}
    
}

export function convertStrings(resultCon) {
    if (resultCon === 0) return 'Congratulations!';
    if (resultCon === -1) return 'Too low';
    if (resultCon === 1) return 'Too high';
}

export function randomThrow() {
    return Math.ceil(Math.random() * 20);
}