const shareButtons = document.querySelectorAll('.tile-share-button')

function copyText(e) {
    e.preventDefault()
   const link = this.getAttribute('link')
    console.log(link)
    try {
        navigator.clipboard.writeText(link)
        alert("Copied The link Successfully")
    } catch (err) {
        console.log(err)
    }
}

shareButtons.forEach(shareBtn => shareBtn.addEventListener('click', copyText))

