i = 1;
mark = 0;
function next() {
    Screen = document.getElementById("q" + i);
    Screen.style.display = "none";

    t = document.getElementsByName("q" + i)[0];
    if (t.checked) {
        mark += 2;
    }
    i++
    if (i <= 10) {
        Screen = document.getElementById("q" + i);
        Screen.style.display = "block";
    }
    else {
        conf = confirm("هل تريد الانتهاء؟");
        if (conf) {
            alert("العلامة النهائية : " + mark)
            window.location.href = '../html.html';
        }
        else {
            i = 1
            Screen = document.getElementById("q" + i);
            Screen.style.display = "block";
        }
    }
}

function back() {
    if (i > 1) {
        Screen = document.getElementById("q" + i);
        Screen.style.display = "none";
        --i
        Screen = document.getElementById("q" + i);
        Screen.style.display = "block";
    }
}
