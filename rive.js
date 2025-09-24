const stateMachine = "State Machine 1";

const riveInstance = new rive.Rive({
	src: "./the_arcane_-_roue.riv", //get rive file
	canvas: document.getElementById("rive"), //get correct canvas
	autoplay: true,
	stateMachines: stateMachine, // get correct stateMachine
	automaticallyHandleEvents: true, // Automatically handle RiveHTTPEvents
	onLoad: onLoadHandler,
});

// Resize the drawing surface if the window resizes
window.addEventListener(
	"resize",
	() => {
		// riveInstance.resizeDrawingSurfaceToCanvas();
	},
	false
);

// Handle the onLoad event
function onLoadHandler() {
	// Prevent a blurry canvas by using the device pixel ratio
	riveInstance.resizeDrawingSurfaceToCanvas();
	inputs = riveInstance.stateMachineInputs(stateMachine);
}

const eventFire = (riveEvent) => {
	const eventData = riveEvent.data;
	const eventName = eventData.name;
	const eventProperties = eventData.properties;
	switch (eventName) {
		case "card1":
			console.log("1");
			break;
		case "card2":
			console.log("2");
			break;
		case "card3":
			console.log("3");
			break;
		case "card4":
			console.log("4");
			break;
		case "card5":
			console.log("5");
			break;
		case "card6":
			console.log("6");
			break;
		default:
			console.log("unused event: " + eventName);
			break;
	}
};

// Register the event handler
riveInstance.on(rive.EventType.RiveEvent, eventFire);

function addOne() {
	return inputs.find((i) => i.name === "addOne").fire();
}
