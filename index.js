let nextHintNumber = 2;

function nextHint() {
    var target = document.getElementById(`hint-container_${nextHintNumber}`)
    if (target != null) {
        this.disabled = true;
        target.style.display = "flex";
        nextHintNumber += 1;
    } else console.log("That doesn't exist!");
}