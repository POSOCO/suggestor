// Declaring the global variables
var line_flow_Akola_Aurangabad_MW = 600;
var line_flow_Wardha_Aurangabad_MW = 1500;
var Voltage_of_Aurangabad_KV = 750;
var line_flow_Wardha_Parli_MW = 600;
var Voltage_Parli_KV = 450;

var suggestionsArray_ = [];

// Utility Function
function Suggest(str){
	if(suggestionsArray_.indexOf(str) == -1){
		suggestionsArray_.push(str);
	}
}

// Core Function
function solve(){
	// First clear the suggestions List
	suggestionsArray_ = [];
	
	// Get the input variables from the html page
	line_flow_Akola_Aurangabad_MW = +document.getElementById("line_flow_Akola_Aurangabad_MW").value;
	line_flow_Wardha_Aurangabad_MW = +document.getElementById("line_flow_Wardha_Aurangabad_MW").value;
	Voltage_of_Aurangabad_KV = +document.getElementById("Voltage_of_Aurangabad_KV").value;
	line_flow_Wardha_Parli_MW = +document.getElementById("line_flow_Wardha_Parli_MW").value;
	Voltage_Parli_KV = +document.getElementById("Voltage_Parli_KV").value;
	
	// Execute the algorithm
	if(line_flow_Akola_Aurangabad_MW >= 600){
		Suggest("Increase Koyna generation");
		Suggest("Open one Aurangabad Pune ");
		Suggest("Take Bableshwar Ektuni both lines into service");
		Suggest("Reduce Mouda, Tirora, Koradi generation, infirm first");
	}
	if(line_flow_Wardha_Aurangabad_MW >= 1500){
		Suggest("Increase Koyna generation");
		Suggest("Take Bableshwar Ektuni both lines into service");
		Suggest("Reduce Mouda, Tirora, Koradi generation, infirm first");
		Suggest("Increase Koina gen. to maintain <1500 MW in each Aurangabad Wardha ckt");
	}
	if(Voltage_of_Aurangabad_KV <= 746){
		Suggest("Switch off Bus Reactors at Aurangabad 765 or 400 kV");
	}
	if(line_flow_Wardha_Parli_MW >= 700){
		Suggest("Increase Chandrapur Padge Flow");
		Suggest("Increase Talcher Kolar Flow");
	}
	if(Voltage_Parli_KV <= 395)
	{
		Suggest("Switch off Bus Reactors at Parli");
	}
	if(suggestionsArray_.length == 0){
		Suggest("Be Alert...");
	}
	
	// Display the suggestions at the end
	displaySuggestions();
}

// Utility Function
function displaySuggestions(){
	alert(suggestionsArray_.join("\n\n"));
}
