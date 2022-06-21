function copyToClipboard() {
    const copyText = document.getElementById("wallet");
    navigator.clipboard.writeText(copyText.innerText);
    swal({
        title: "Copied the wallet",
//                text: "This alert will disappear after 2 seconds.",
        position: "bottom",
        allowOutsideClick: true,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        showCancelButton: false,
        timer: 1000
    });
//            alert("Copied the text: " + copyText.innerText);
}
