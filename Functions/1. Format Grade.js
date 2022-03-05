function grade(mark) {
    if (mark < 3) {
        console.log('Fail (2)');
    } else if (mark >= 3 && mark < 3.50) {
        console.log(`Poor (${mark.toFixed(2)})`);
    } else if (mark >= 3.50 && mark < 4.50) {
        console.log(`Good (${mark.toFixed(2)})`);
    } else if (mark >= 4.50 && mark < 5.50) {
        console.log(`Very good (${mark.toFixed(2)})`);
    } else {
        console.log(`Excellent (${mark.toFixed(2)})`);
    }
}
grade(3.33);
grade(4.50);
grade(2.99);