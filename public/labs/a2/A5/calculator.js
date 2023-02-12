function add() {
    const a = document.getElementById("A");
    const b = document.getElementById("B");
    const c = document.getElementById("C");

    const aV = parseInt(a.value);
    const bV = parseInt(b.value);
    const cV = aV + bV;

    c.value = cV;
}


function add2() {
    const $aElement = $("#A");
    const $bElement = $("#B");
    const $cElement = $("#C");

    const aV = parseInt($aElement.val());
    const bV = parseInt($bElement.val());
    $cElement.val(aV + bV);
}

const $addBtn = $("#addBtn");
$addBtn.click(add2);
