function openPreviewWindow() {
	// Set the content of the new page to the iframe
	window.open('', '', 'menubar=1,resizable=1,width=650,height=450').document.body.innerHTML = '<iframe id="embedPlayer" src="https://embed.music.apple.com/us/album/%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9/1281517589?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto" height="450px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style="width: 100%; max-width: 660px; overflow: hidden; border-radius: 10px; transform: translateZ(0px); animation: 2s ease 0s 6 normal none running loading-indicator; background-color: rgb(228, 228, 228);"></iframe>';
}

document.querySelectorAll('.js-call-preview-window').forEach(el => (
	el.addEventListener('click', openPreviewWindow)
));