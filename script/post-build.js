if (someVariable && someVariable[1]) { // Ensure someVariable is not null and has at least 2 elements
    // Your existing logic here
} else {
    console.error("Expected data structure is not valid:", someVariable);
    process.exit(1); // Exit with an error code
}