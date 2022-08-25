function task(input) {
    let n = input.shift();
    let regex = /^([$%])(?<name>([A-Z][a-z]{2,}))\1: \[(?<n1>(\d+))\]\|\[(?<n2>(\d+))\]\|\[(?<n3>(\d+))\]\|$/gm;
    for (let i = 0; i < n; i++) {
        let match = regex.exec(input[i])
        if (match != null) {
            console.log(`${match.groups.name}: ${String.fromCharCode(match.groups.n1)}${String.fromCharCode(match.groups.n2)}${String.fromCharCode(match.groups.n3)}`);
        } else {
            console.log("Valid message not found!");
        }
    }
}
task(["3",
    "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
    "$tAGged$: [97][97][97]|",
    "$Request$: [73]|[115]|[105]|true"
])