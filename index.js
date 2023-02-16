const charval = document.getElementById("textarea");
let totalcount = document.getElementById("total-count");
let remaincount = document.getElementById("remain-count");

let uchar = 0;

const updatecounter = () => {
    uchar = charval.value.length;
    totalcount.innerText = uchar;
    remaincount.innerText = 2000 - uchar;
};

charval.addEventListener("keyup", () => updatecounter());

const copytext = () => {
    charval.select();
    charval.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(charval.value);
    alert("Copied ");
};
