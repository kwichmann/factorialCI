function faculty(n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return null;
    }
    return n * faculty(n - 1);
}

module.exports = faculty;