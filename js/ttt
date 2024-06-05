let sharedVariable = "initial";

setTimeout(() => {
  sharedVariable = "updated by first timeout";
}, 500);

setTimeout(() => {
  if (sharedVariable === "initial") {
    console.log("Shared variable not yet updated");
  } else {
    console.log("Shared variable was already updated");
  }
}, 500);
