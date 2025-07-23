
function change_colour() {
    let A_Hex_Colour_Input = document.getElementById("Colour_A_Input").value.slice(1);
    let B_Hex_Colour_Input = document.getElementById("Colour_B_Input").value.slice(1);
    
    let Colour_A_Picker = document.getElementById("Colour_A_Picker")
    let Colour_B_Picker = document.getElementById("Colour_B_Picker")

    let Output = document.getElementById('square').style;

    let Colour_A_Hex_Label = document.getElementById("Colour_A_Hex_Label");
    let Colour_B_Hex_Label = document.getElementById("Colour_B_Hex_Label");
    let Output_Colour_Hex_Label = document.getElementById("Output_Colour_Hex_Label");

    let Colour_A_RGB_Label = document.getElementById("Colour_A_RGB_Label");
    let Colour_B_RGB_Label = document.getElementById("Colour_B_RGB_Label");
    let Output_Colour_RGB_Label = document.getElementById("Output_Colour_RGB_Label");

    let A_RGB = convert_to_rgb(A_Hex_Colour_Input);
    let B_RGB = convert_to_rgb(B_Hex_Colour_Input);


    let Output_RGB = [...Array(3)].map(x => 0);
    for (let channel in Output_RGB) {
        Output_RGB[channel] = Math.round((A_RGB[channel] + B_RGB[channel]) / 2);
    }

    let Output_Hex = convert_to_hex(...Output_RGB);

    Colour_A_Hex_Label.innerText = "#"+A_Hex_Colour_Input;
    Colour_B_Hex_Label.innerText = "#"+B_Hex_Colour_Input;
    Output_Colour_Hex_Label.innerText = Output_Hex;

    Colour_A_RGB_Label.innerText = "RGB("+A_RGB+")"
    Colour_B_RGB_Label.innerText = "RGB("+B_RGB+")"
    Output_Colour_RGB_Label.innerText = "RGB("+Output_RGB+")";

    Colour_A_Picker.style.backgroundColor = "#"+A_Hex_Colour_Input;
    Colour_B_Picker.style.backgroundColor = "#"+B_Hex_Colour_Input;
    Output.backgroundColor = Output_Hex;

};

function openPicker(id) {
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

    return Final;
};

function Copy_Text(element) {
    navigator.clipboard.writeText(document.getElementById(element.id).innerText)
};

function Reset() {
    document.getElementById("Colour_A_Input").value = "#000000";
    document.getElementById("Colour_B_Input").value = "#000000";
    change_colour();
};