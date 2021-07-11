
function handlePaste(e) {
	let clipboardData, pastedData;

	// Stop data actually being pasted into div
	//e.stopPropagation();
	//e.preventDefault();

	// Get pasted data via clipboard API
	clipboardData = e.clipboardData || window.clipboardData;
	pastedData = clipboardData.getData('Text');
	pastedData=pastedData.replace(/++/gi, "plusplus_182763412361032");
	//pastedData.replace(/ + /gi, "plusplus_182763412361033");
	//pastedData.replace(/+/gi, " + ");
	//pastedData.replace(/plusplus_182763412361032/gi, "++")
	//pastedData.replace(/--/gi, "mm182763412361032");
	//pastedData.replace(/ - /gi, "mm182763412361033");
	//pastedData.replace(/-/gi, " + ");
	//pastedData.replace(/mm182763412361032/gi, "++")
	document.write(pastedData);
// Do whatever with pasteddata
	alert("Done formatting");
}

document.getElementById('editableDiv').addEventListener('paste', handlePaste);