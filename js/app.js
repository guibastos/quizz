$(document).ready(function() {


var question_answers = [
    {Country:"Brazil", CorrectAnswer:"Brasilia", AnswerSet:["Brasilia","Rio de Janeiro","Buenos Aires","Santiago"]}, 
    {Country:"Burkina Faso", CorrectAnswer:"Ouagadugu", AnswerSet:["Libreville","Banjul","Ouagadugu","Maputo"]}, 
    {Country:"Turkmenistan", CorrectAnswer: "Ashgabat", AnswerSet:["Astana","Ankara","Tibilisi","Ashgabat"]},
    {Country:"Tuvalu", CorrectAnswer:"Funafuti", AnswerSet:["Apia","Port Vila","Funafuti","Wellington"]}, 
    {Country:"Chad", CorrectAnswer:"N'Djamena", AnswerSet:["N'Djamena","Bissau","Maseru","Antananarivo"]}, 
    {Country:"Bulgaria", CorrectAnswer: "Sofia", AnswerSet:["Tallin","Budapest","Riga","Sofia"]},
    {Country:"Poland", CorrectAnswer:"Warsaw", AnswerSet:["Vaduz","Warsaw","Skopje","Reykjavik"]}, 
    {Country:"Canada", CorrectAnswer:"Ottawa", AnswerSet:["Ottawa","Toronto","Georgetown","Havana"]}, 
    {Country:"Indonesia", CorrectAnswer: "Jakarta", AnswerSet:["Malé","Bangkok","Jakarta","Hanoi"]},
    {Country:"Syria", CorrectAnswer: "Damascus", AnswerSet:["Baghdad","Beirut","Aleppo","Damascus"]},
];

$("#countryquestion").html(question_answers[0].Country);
$("#ans0").html(question_answers[0].AnswerSet[0]);
$("#ans1").html(question_answers[0].AnswerSet[1]);
$("#ans2").html(question_answers[0].AnswerSet[2]);
$("#ans3").html(question_answers[0].AnswerSet[3]);

function Questions(value) {
		$("#countryquestion").html(question_answers[value].Country);
		$("#ans0").html(question_answers[value].AnswerSet[0]);
		$("#ans1").html(question_answers[value].AnswerSet[1]);
		$("#ans2").html(question_answers[value].AnswerSet[2]);
		$("#ans3").html(question_answers[value].AnswerSet[3]);
		
	};

$(".items-list").on('click', function() {
	for(var i=1; i<10; i++){
		Questions(i);
		console.log(i);
	};
});

});

// $(".items-list").on('click', function() {
// 	var i = 1;
// 	while (i<10) {
// 		Questions(i);
// 		console.log(i);
// 		i++;
// 	};
// });






// $(".items-list").on('click', function() {

// 	for(var i=1; i<10; i++) {
// 		$("#countryquestion").html(question_answers[i].Country);
// 		$("#ans0").html(question_answers[i].AnswerSet[0]);
// 		$("#ans1").html(question_answers[i].AnswerSet[1]);
// 		$("#ans2").html(question_answers[i].AnswerSet[2]);
// 		$("#ans3").html(question_answers[i].AnswerSet[3]);

// 	}

// var i = 1;
// while (i<10) {
// 	$(".items-list").on('click', function() {
// 		$("#countryquestion").html(question_answers[value].Country);
// 		$("#ans0").html(question_answers[value].AnswerSet[0]);
// 		$("#ans1").html(question_answers[value].AnswerSet[1]);
// 		$("#ans2").html(question_answers[value].AnswerSet[2]);
// 		$("#ans3").html(question_answers[value].AnswerSet[3]);
// 		i++;
// 		console.log(i);
// 	});
// };



