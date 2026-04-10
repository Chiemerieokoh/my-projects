let screen = document.getElementById("screen");

function press(value) {
  if (value === "π") {
    screen.value += Math.PI;
  }
  else if (value === "**") {
    screen.value += "**";
  }
  else {
    screen.value += value;
  }
}

function clearScreen() {
  screen.value = "";
}

function sqrt() {
  screen.value = Math.sqrt(eval(screen.value));
}

function toRadians() {
  screen.value = eval(screen.value) * Math.PI / 180;
}

function delta() {
  let nums = screen.value.split(",");
  if (nums.length === 2) {
    screen.value = nums[1] - nums[0];
  } else {
    screen.value = "Use a,b";
  }
}

function check() {
  screen.value = "OK";
}

function calculate() {
  try {
    screen.value = Function("return " + screen.value)();
  } catch {
    screen.value = "Error";
  }
}