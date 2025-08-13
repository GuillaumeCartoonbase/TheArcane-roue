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
}

const eventFire = (riveEvent) => {
	const eventData = riveEvent.data;
	const eventName = eventData.name;
	const eventProperties = eventData.properties;
	const cardNumber = eventName.slice(-1);
	switch (cardNumber) {
		case "1":
			console.log("1");
			break;
		case "2":
			console.log("2");
			break;
		case "3":
			console.log("3");
			break;
		case "4":
			console.log("4");
			break;
		case "5":
			console.log("5");
			break;
		case "6":
			console.log("6");
			break;
		default:
			break;
	}
};

// Register the event handler
riveInstance.on(rive.EventType.RiveEvent, eventFire);
