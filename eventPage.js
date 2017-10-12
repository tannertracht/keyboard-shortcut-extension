chrome.commands.onCommand.addListener(function(command) {
	// command returns the name of the command that got fired
	// all actions relating to shortcuts can be inside this function
    alert("fired");
});
