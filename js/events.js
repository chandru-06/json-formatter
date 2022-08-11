var input1 = ""
var input2 = ""
const pro_code = document.getElementById("processed_codearea");


document.getElementById("jsonfileinput").addEventListener("change", function () {
    var file_to_read = document.getElementById("jsonfileinput").files[0];
    var fileread = new FileReader();
    fileread.onload = function (e) {
        // var content = e.target.result;
        // var intern = JSON.parse(content); // parse json 
        // editor.setValue(JSON.stringify(intern))

        try {
            var content = e.target.result;
            var intern = JSON.parse(content); // parse json 
            editor.setValue(JSON.stringify(intern))
        }
        catch {
            alert("Invalid File format / JSON Data")
            reset()
        }
    };
    fileread.readAsText(file_to_read);
});

function uploadfn() {
    document.getElementById('jsonfileinput').click()

}

function clearfn1() {
    editor.setValue("");
    reset()
}

function clearfn2() {
    editor1.setValue("");
    reset()
}

function pastefn() {
    var temp = navigator.clipboard.readText().then(
        fn => {
            editor.setValue(fn.toString())
        }
    )

}

function samplefn() {
    editor.setValue('{"name":"John", "age":30, "car":null}')
}

function formatfn() {
    const code = editor.getValue();
    if (code == "") {
        alert("Kindly provide JSON Data")
        pro_code.style.display = "none"
    }
    else {
        try {
            var code2 = JSON.parse(code)
            var code1 = JSON.stringify(code2, null, 4)
            editor1.setValue(code1);
            pro_code.style.display = "block"
        }
        catch {
            alert("Invalid JSON Data")
            editor.setValue("");
            reset()
        }

    }

}

function downloadfn() {
    var content = editor1.getValue();
    let j = document.createElement("a");
    j.download = "Data" + ".json";
    j.href = URL.createObjectURL(new Blob([content], { type: 'application/json' }));
    j.click()
}

function copyfn() {
    var outputvalue = editor1.getValue();
    navigator.clipboard.writeText(outputvalue);
    document.getElementById("succes_msg").style.display = "block";
    document.getElementById("succes_msg").innerHTML = "Code Copied Successfully!!!";
    var x = document.getElementById("succes_msg");
    setTimeout(function () { x.style.display = "none" }, 3000)

}

function reset() {
    pro_code.style.display = "none"
}