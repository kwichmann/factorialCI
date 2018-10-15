const faculty = require('../src/faculty');

test("Faculty of zero should be one", () => {
    expect(faculty(0)).toBe(1);
});

test("Faculty of 5 should be 120", () => {
    expect(faculty(5)).toBe(120);
});

test("Faculty of -2 should be undefined (null)", () => {
    expect(faculty(-2)).toBe(null);
});
