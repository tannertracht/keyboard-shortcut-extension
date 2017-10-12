chrome.commands.onCommand.addListener(function(command) {
	// command returns the name of the command that got fired
	// all actions relating to shortcuts can be inside this function
    if (command == "boom") {
		// Query info guarentees we grab current tab
		var queryInfo = {
			active: true,
			currentWindow: true
		};
		chrome.tabs.query(queryInfo, (tabs) => {
			var tab = tabs[0];
			chrome.tabs.duplicate(tab.id);
		});
	};
});
