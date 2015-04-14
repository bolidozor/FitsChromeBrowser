function checkForValidUrl(tabId, changeInfo, tab) {
	if (tab.url.indexOf('g') > -1) {
		chrome.pageAction.show(tabId);
	}
};
chrome.tabs.onUpdated.addListener(checkForValidUrl);


function go()
{
	var tab = window.open("http://meteor1.astrozor.cz/f.png?"+document.getElementById('f.png').value, '_blank');
	tab.focus();
}

document.getElementById('Plot').onclick = go;