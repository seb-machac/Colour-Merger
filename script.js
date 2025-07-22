

function change_colour() {
    let A_Colour_Input = document.getElementById("Colour_A_Input").value.slice(1);
    let B_Colour_Input = document.getElementById("Colour_B_Input").value.slice(1);
    
    let Colour_A_Picker = document.getElementById("Colour_A_Picker")
    let Colour_B_Picker = document.getElementById("Colour_B_Picker")

    let Output = document.getElementById('square').style;

    let A_Label = document.getElementById("Colour_A_Label");
    let B_Label = document.getElementById("Colour_B_Label");
    let Output_Label = document.getElementById("Output_Colour_Label");

    let A_RGB = convert_to_rgb(A_Colour_Input);
    let B_RGB = convert_to_rgb(B_Colour_Input);

    let Total_R = Math.round((A_RGB[0] + B_RGB[0]) / 2);
    let Total_G = Math.round((A_RGB[1] + B_RGB[1]) / 2);
    let Total_B = Math.round((A_RGB[2] + B_RGB[2]) / 2);

    // console.log("R:"+Total_R);
    // console.log("G:"+Total_G);
    // console.log("B:"+Total_B);

    let Output_Hex = convert_to_hex(Total_R,Total_G,Total_B);

    // console.log(Output_Hex);
    Output.backgroundColor = Output_Hex;

    A_Label.innerText = "#"+A_Colour_Input;
    B_Label.innerText = "#"+B_Colour_Input;
    Output_Label.innerText = Output_Hex;
    Colour_A_Picker.style.backgroundColor = "#"+A_Colour_Input;
    Colour_B_Picker.style.backgroundColor = "#"+B_Colour_Input;

};

function openPicker(id) {
  // Open the hidden real input
  const realInput = document.getElementById(`Colour_${id}_Input`);
  realInput.click();
}

function convert_to_rgb(hex) {
    const match = hex.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);
	if (!match) {
		return [0, 0, 0];
	};

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = [...colorString].map(char => char + char).join('');
	};

	const integer = Number.parseInt(colorString, 16);
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;

    return [r, g, b];
};



function convert_to_hex(R, G, B) {
    const integer = ((R & 0xFF) << 16)
		+ ((G & 0xFF) << 8)
		+ (B & 0xFF);

	const string = integer.toString(16).toUpperCase();
	let Final = "#"+'000000'.slice(string.length) + string;

    // console.log(Final);

    return Final;
};
