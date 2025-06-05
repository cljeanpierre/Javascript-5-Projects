const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value
    const reverse = reverseString(value)
    
    if (value === reverse) {
        alert("THIS IS INDEED A PALINDROME")
    } else {
        alert("THIS IS NOT A PALINDROME")
    }

    input.value = ""
}