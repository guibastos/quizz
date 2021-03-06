$(document).ready(function() {

$(".header").on('click',function() {
	location.reload();
});

$(".myButton").on('click',function() {

	$(".game").show();
	$(".introduction").hide();

});

	var question_answers = [
		{Country: "Afghanistan", CorrectAnswer: "Kabul", AnswerSet:["Kabul","Damascus","Beirut","Nicosia"]},
		{Country: "Albania", CorrectAnswer: "Tirana", AnswerSet:["Tirana","Vatican City","Zagreb","Vaduz"]},
		{Country: "Algeria", CorrectAnswer: "Algiers", AnswerSet:["Algiers","Mbabane","Khartoum","Tripoli"]},
		{Country: "Andorra", CorrectAnswer: "Andorra la Vella", AnswerSet:["Andorra la Vella","Belgrade","Pristina","Amsterdam"]},
		{Country: "Angola", CorrectAnswer: "Luanda", AnswerSet:["Luanda","Antananarivo","Asmara","Accra"]},
		{Country: "Antigua & Barbuda", CorrectAnswer: "Saint John's", AnswerSet:["Saint John's","Tegucigalpa","Panama City","Roseau"]},
		{Country: "Argentina", CorrectAnswer: "Buenos Aires", AnswerSet:["Buenos Aires","Caracas","Cordoba","Quito"]},
		{Country: "Armenia", CorrectAnswer: "Yerevan", AnswerSet:["Yerevan","Kathmandu","Hanoi","Manila"]},
		{Country: "Australia", CorrectAnswer: "Canberra", AnswerSet:["Canberra","Suva","Palikir","Funafuti"]},
		{Country: "Austria", CorrectAnswer: "Vienna", AnswerSet:["Vienna","Andorra la Vella","Chișinău","Ljubljana"]},
		{Country: "Azerbaijan", CorrectAnswer: "Baku", AnswerSet:["Baku","Islamabad","Naypyidaw","Tokyo"]},
		{Country: "Bahamas", CorrectAnswer: "Nassau", AnswerSet:["Nassau","Guatemala City","Castries","Kingston"]},
		{Country: "Bahrain", CorrectAnswer: "Manama", AnswerSet:["Manama","Yerevan","Ulaanbaatar","Astana"]},
		{Country: "Bangladesh", CorrectAnswer: "Dhaka", AnswerSet:["Dhaka","Amman","Phnom Penh","Bandar Seri Begawan"]},
		{Country: "Barbados", CorrectAnswer: "Bridgetown", AnswerSet:["Bridgetown","Saint John's","Roseau","San José"]},
		{Country: "Belarus", CorrectAnswer: "Minsk", AnswerSet:["Minsk","Bucharest","Moscow","Sarajevo"]},
		{Country: "Belgium", CorrectAnswer: "Brussels", AnswerSet:["Brussels","Bern","Ljubljana","Riga"]},
		{Country: "Belize", CorrectAnswer: "Belmopan", AnswerSet:["Belmopan","San Salvador","Washington D.C.","Basseterre"]},
		{Country: "Benin", CorrectAnswer: "Porto-Novo or Cotonou", AnswerSet:["Porto-Novo or Cotonou","Praia","Addis Ababa","Maseru"]},
		{Country: "Bhutan", CorrectAnswer: "Thimphu", AnswerSet:["Thimphu","Baku","Ankara","Taipei"]},
		{Country: "Bolivia", CorrectAnswer: "La Paz or Sucre", AnswerSet:["La Paz or Sucre","Montevideo","Santiago","Georgetown"]},
		{Country: "Bosnia & Herzegovina", CorrectAnswer: "Sarajevo", AnswerSet:["Sarajevo","Nicosia","Vilnius","Vatican City"]},
		{Country: "Botswana", CorrectAnswer: "Gaborone", AnswerSet:["Gaborone","Pretoria, Cape Town or Bloemfontein","Bissau","Conakry"]},
		{Country: "Brazil", CorrectAnswer: "Brasília", AnswerSet:["Brasília","Santiago","Caracas","Buenos Aires"]},
		{Country: "Brunei", CorrectAnswer: "Bandar Seri Begawan", AnswerSet:["Bandar Seri Begawan","Ulaanbaatar","Vientiane","Beijing"]},
		{Country: "Bulgaria", CorrectAnswer: "Sofia", AnswerSet:["Sofia","Vilnius","Zagreb","Athens"]},
		{Country: "Burkina Faso", CorrectAnswer: "Ouagadougou", AnswerSet:["Ouagadougou","Porto-Novo or Cotonou","Freetown","Windhoek"]},
		{Country: "Burma", CorrectAnswer: "Naypyidaw", AnswerSet:["Naypyidaw","Jakarta","Thimphu","Manama"]},
		{Country: "Burundi", CorrectAnswer: "Bujumbura", AnswerSet:["Bujumbura","Khartoum","Maputo","Addis Ababa"]},
		{Country: "Cambodia", CorrectAnswer: "Phnom Penh", AnswerSet:["Phnom Penh","Beirut","Tbilisi","Damascus"]},
		{Country: "Cameroon", CorrectAnswer: "Yaoundé", AnswerSet:["Yaoundé","N'Djamena","Nouakchott","Windhoek"]},
		{Country: "Canada", CorrectAnswer: "Ottawa", AnswerSet:["Ottawa","Santo Domingo","San José","Port-au-Prince"]},
		{Country: "Cape Verde", CorrectAnswer: "Praia", AnswerSet:["Praia","Cairo","Kigali","Brazzaville"]},
		{Country: "Central African Republic", CorrectAnswer: "Bangui", AnswerSet:["Bangui","Djibouti","Tunis","Yaoundé"]},
		{Country: "Chad", CorrectAnswer: "N'Djamena", AnswerSet:["N'Djamena","Luanda","Lusaka","Libreville"]},
		{Country: "Chile", CorrectAnswer: "Santiago", AnswerSet:["Santiago","Lima","Quito","Caracas"]},
		{Country: "China", CorrectAnswer: "Beijing", AnswerSet:["Beijing","New Delhi","Singapore","Dili"]},
		{Country: "Colombia", CorrectAnswer: "Bogotá", AnswerSet:["Bogotá","Georgetown","Brasília","Asunción"]},
		{Country: "Comoros", CorrectAnswer: "Moroni", AnswerSet:["Moroni","Nouakchott","Luanda","Dodoma"]},
		{Country: "Congo (Dem. Rep.)", CorrectAnswer: "Kinshasa", AnswerSet:["Kinshasa","Lomé","Lilongwe","Luanda"]},
		{Country: "Congo (Rep. of.)", CorrectAnswer: "Brazzaville", AnswerSet:["Brazzaville","Libreville","Monrovia","Juba"]},
		{Country: "Costa Rica", CorrectAnswer: "San José", AnswerSet:["San José","Saint George's","Managua","Port-of-Spain"]},
		{Country: "Cote d'Ivoire", CorrectAnswer: "Yamoussoukro", AnswerSet:["Yamoussoukro","Dodoma","Kampala","Praia"]},
		{Country: "Croatia", CorrectAnswer: "Zagreb", AnswerSet:["Zagreb","Pristina","Reykjavík","San Marino"]},
		{Country: "Cuba", CorrectAnswer: "Havana", AnswerSet:["Havana","Bridgetown","Port-of-Spain","Ottawa"]},
		{Country: "Cyprus", CorrectAnswer: "Nicosia", AnswerSet:["Nicosia","Sarajevo","Kabul","Amman"]},
		{Country: "Czech Republic", CorrectAnswer: "Prague", AnswerSet:["Prague","Helsinki","Vienna","Sofia"]},
		{Country: "Denmark", CorrectAnswer: "Copenhagen", AnswerSet:["Copenhagen","Minsk","Bratislava","Belgrade"]},
		{Country: "Djibouti", CorrectAnswer: "Djibouti", AnswerSet:["Djibouti","Kigali","Praia","Rabat"]},
		{Country: "Dominica", CorrectAnswer: "Roseau", AnswerSet:["Basseterre","Roseau","Port Prince","Kingston"]},
		{Country: "Dominican Republic", CorrectAnswer: "Santo Domingo", AnswerSet:["San José","Santo Domingo","Port-au-Prince","Havana"]},
		{Country: "East Timor", CorrectAnswer: "Dili", AnswerSet:["Muscat","Dili","Manama","Beirut"]},
		{Country: "Ecuador", CorrectAnswer: "Quito", AnswerSet:["Paramaribo","Quito","Lima","La Paz or Sucre"]},
		{Country: "Egypt", CorrectAnswer: "Cairo", AnswerSet:["Conakry","Cairo","Bangui","Freetown"]},
		{Country: "El Salvador", CorrectAnswer: "San Salvador", AnswerSet:["Port-au-Prince","San Salvador","Ottawa","Tegucigalpa"]},
		{Country: "Equatorial Guinea", CorrectAnswer: "Malabo", AnswerSet:["Accra","Malabo","Moroni","Niamey"]},
		{Country: "Eritrea", CorrectAnswer: "Asmara", AnswerSet:["Yaoundé","Asmara","Port Louis","Abuja"]},
		{Country: "Estonia", CorrectAnswer: "Tallinn", AnswerSet:["Bratislava","Tallinn","Tirana","Podgorica"]},
		{Country: "Ethiopia", CorrectAnswer: "Addis Ababa", AnswerSet:["Maputo","Addis Ababa","São Tomé","Victoria"]},
		{Country: "Fiji", CorrectAnswer: "Suva", AnswerSet:["Nukuʻalofa","Suva","Port Vila","Canberra"]},
		{Country: "Finland", CorrectAnswer: "Helsinki", AnswerSet:["Monaco","Helsinki","Bucharest","Reykjavík"]},
		{Country: "France", CorrectAnswer: "Paris", AnswerSet:["Tallinn","Paris","Kiev","Thimphu"]},
		{Country: "Gabon", CorrectAnswer: "Libreville", AnswerSet:["Tunis","Libreville","Victoria","Lomé"]},
		{Country: "Gambia", CorrectAnswer: "Banjul", AnswerSet:["Lusaka","Banjul","Antananarivo","Bujumbura"]},
		{Country: "Georgia", CorrectAnswer: "Tbilisi", AnswerSet:["Pyongyang","Tbilisi","Malé","Dhaka"]},
		{Country: "Germany", CorrectAnswer: "Berlin", AnswerSet:["Chișinău","Berlin","Rome","Bratislava"]},
		{Country: "Ghana", CorrectAnswer: "Accra", AnswerSet:["São Tomé","Accra","Rabat","Bangui"]},
		{Country: "Greece", CorrectAnswer: "Athens", AnswerSet:["Lisbon","Athens","Stockholm","Pristina"]},
		{Country: "Grenada", CorrectAnswer: "Saint George's", AnswerSet:["Kingston","Saint George's","Santo Domingo","Saint John's"]},
		{Country: "Guatemala", CorrectAnswer: "Guatemala City", AnswerSet:["Ottawa","Guatemala City","Mexico City","Belmopan"]},
		{Country: "Guinea", CorrectAnswer: "Conakry", AnswerSet:["Addis Ababa","Conakry","Mogadishu","Lusaka"]},
		{Country: "Guinea-Bissau", CorrectAnswer: "Bissau", AnswerSet:["Maseru","Bissau","Ouagadougou","Kigali"]},
		{Country: "Guyana", CorrectAnswer: "Georgetown", AnswerSet:["Quito","Georgetown","Montevideo","Lima"]},
		{Country: "Haiti", CorrectAnswer: "Port-au-Prince", AnswerSet:["Managua","Port-au-Prince","Guatemala City","Panama City"]},
		{Country: "Honduras", CorrectAnswer: "Tegucigalpa", AnswerSet:["Roseau","Tegucigalpa","San Salvador","Managua"]},
		{Country: "Hungary", CorrectAnswer: "Budapest", AnswerSet:["Pristina","Budapest","Berlin","Skopje"]},
		{Country: "Iceland", CorrectAnswer: "Reykjavík", AnswerSet:["San Marino","Reykjavík","Warsaw","Rome"]},
		{Country: "India", CorrectAnswer: "New Delhi", AnswerSet:["Vientiane","New Delhi","Seoul","Riyadh"]},
		{Country: "Indonesia", CorrectAnswer: "Jakarta", AnswerSet:["Kuala Lumpur","Jakarta","Jerusalem","Sana'a"]},
		{Country: "Iran", CorrectAnswer: "Tehran", AnswerSet:["Manama","Tehran","Sana'a","Tashkent"]},
		{Country: "Iraq", CorrectAnswer: "Baghdad", AnswerSet:["Tbilisi","Baghdad","Dili","Jerusalem"]},
		{Country: "Ireland", CorrectAnswer: "Dublin", AnswerSet:["Athens","Dublin","London","Guiness"]},
		{Country: "Israel", CorrectAnswer: "Jerusalem", AnswerSet:["Taipei","Jerusalem","Yerevan","Seoul"]},
		{Country: "Italy", CorrectAnswer: "Rome", AnswerSet:["Vaduz","Rome","Monaco","Bern"]},
		{Country: "Jamaica", CorrectAnswer: "Kingston", AnswerSet:["Washington D.C.","Kingston","St. Moritz","Wellington"]},
		{Country: "Japan", CorrectAnswer: "Tokyo", AnswerSet:["Thimphu","Tokyo","Bishkek","Yaoundé"]},
		{Country: "Jordan", CorrectAnswer: "Amman", AnswerSet:["Ashgabat","Amman","Astana","Damascus"]},
		{Country: "Kazakhstan", CorrectAnswer: "Astana", AnswerSet:["Tehran","Astana","Bangkok","Islamabad"]},
		{Country: "Kenya", CorrectAnswer: "Nairobi", AnswerSet:["Tripoli","Nairobi","Conakry","Porto-Novo or Cotonou"]},
		{Country: "Kiribati", CorrectAnswer: "South Tarawa", AnswerSet:["Honiara","South Tarawa","Suva","Port Moresby"]},
		{Country: "Kosovo", CorrectAnswer: "Pristina", AnswerSet:["Oslo","Pristina","Zagreb","Lisbon"]},
		{Country: "Kuwait", CorrectAnswer: "Kuwait City", AnswerSet:["Seoul","Kuwait City","Muscat","Vientiane"]},
		{Country: "Kyrgyzstan", CorrectAnswer: "Bishkek", AnswerSet:["Tashkent","Bishkek","Beijing","Sri Jayawardenapura, Kotte"]},
		{Country: "Laos", CorrectAnswer: "Vientiane", AnswerSet:["Bangkok","Vientiane","Sri Jayawardenapura, Kotte","Hanoi"]},
		{Country: "Latvia", CorrectAnswer: "Riga", AnswerSet:["Stockholm","Riga","Bern","Moscow"]},
		{Country: "Lebanon", CorrectAnswer: "Beirut", AnswerSet:["Doha","Beirut","Dushanbe","New Delhi"]},
		{Country: "Lesotho", CorrectAnswer: "Maseru", AnswerSet:["Brazzaville","Maseru","Windhoek","Dakar"]},
		{Country: "Liberia", CorrectAnswer: "Monrovia", AnswerSet:["Ouagadougou","Monrovia","Pretoria, Cape Town or Bloemfontein","Khartoum"]},
		{Country: "Libya", CorrectAnswer: "Tripoli", AnswerSet:["Malabo","Tripoli","Banjul","Lilongwe"]},
		{Country: "Liechtenstein", CorrectAnswer: "Vaduz", AnswerSet:["Vienna","Prague","Vaduz","Paris"]},
		{Country: "Lithuania", CorrectAnswer: "Vilnius", AnswerSet:["Dublin","Vaduz","Vilnius","Tirana"]},
		{Country: "Luxembourg", CorrectAnswer: "Luxembourg", AnswerSet:["Kiev","Dublin","Luxembourg","Zagreb"]},
		{Country: "Macedonia", CorrectAnswer: "Skopje", AnswerSet:["Brussels","Sofia","Skopje","Luxembourg"]},
		{Country: "Madagascar", CorrectAnswer: "Antananarivo", AnswerSet:["Moroni","Bujumbura","Antananarivo","Ouagadougou"]},
		{Country: "Malawi", CorrectAnswer: "Lilongwe", AnswerSet:["Niamey","Yaoundé","Lilongwe","São Tomé"]},
		{Country: "Malaysia", CorrectAnswer: "Kuala Lumpur", AnswerSet:["Dili","Manila","Kuala Lumpur","Thimphu"]},
		{Country: "Maldives", CorrectAnswer: "Malé", AnswerSet:["Astana","Dhaka","Malé","Ulaanbaatar"]},
		{Country: "Mali", CorrectAnswer: "Bamako", AnswerSet:["Banjul","Accra","Bamako","Mogadishu"]},
		{Country: "Malta", CorrectAnswer: "Valletta", AnswerSet:["Prague","Sarajevo","Valletta","Tallinn"]},
		{Country: "Marshall Islands", CorrectAnswer: "Majuro", AnswerSet:["Funafuti","Ngerulmud","Majuro","Yaren"]},
		{Country: "Mauritania", CorrectAnswer: "Nouakchott", AnswerSet:["Juba","Libreville","Nouakchott","Yamoussoukro"]},
		{Country: "Mauritius", CorrectAnswer: "Port Louis", AnswerSet:["Rabat","Abuja","Port Louis","Harare"]},
		{Country: "Mexico", CorrectAnswer: "Mexico City", AnswerSet:["Castries","Saint George's","Mexico City","Guadalajara"]},
		{Country: "Micronesia (Fed. States)", CorrectAnswer: "Palikir", AnswerSet:["Majuro","Wellington","Palikir","Nukuʻalofa"]},
		{Country: "Moldova", CorrectAnswer: "Chișinău", AnswerSet:["Moscow","Podgorica","Chișinău","Andorra la Vella"]},
		{Country: "Monaco", CorrectAnswer: "Monaco", AnswerSet:["Podgorica","Minsk","Monaco","Warsaw"]},
		{Country: "Mongolia", CorrectAnswer: "Ulaanbaatar", AnswerSet:["Tokyo","Ashgabat","Ulaanbaatar","Phnom Penh"]},
		{Country: "Montenegro", CorrectAnswer: "Podgorica", AnswerSet:["London","Athens","Podgorica","Budapest"]},
		{Country: "Morocco", CorrectAnswer: "Rabat", AnswerSet:["Mogadishu","Algiers","Rabat","Moroni"]},
		{Country: "Mozambique", CorrectAnswer: "Maputo", AnswerSet:["Freetown","Porto-Novo or Cotonou","Maputo","Asmara"]},
		{Country: "Namibia", CorrectAnswer: "Windhoek", AnswerSet:["Bissau","Malabo","Windhoek","Banjul"]},
		{Country: "Nauru", CorrectAnswer: "Yaren", AnswerSet:["Ngerulmud","Funafuti","Yaren","Palikir"]},
		{Country: "Nepal", CorrectAnswer: "Kathmandu", AnswerSet:["Abu Dhabi","Amman","Kathmandu","Kabul"]},
		{Country: "Netherlands", CorrectAnswer: "Amsterdam", AnswerSet:["Tirana","Helsinki","Amsterdam","Bucharest"]},
		{Country: "New Zealand", CorrectAnswer: "Wellington", AnswerSet:["Port Vila","Majuro","Wellington","Suva"]},
		{Country: "Nicaragua", CorrectAnswer: "Managua", AnswerSet:["Belmopan","Tegucigalpa","Managua","Santo Domingo"]},
		{Country: "Niger", CorrectAnswer: "Niamey", AnswerSet:["Port Louis","N'Djamena","Niamey","Kinshasa"]},
		{Country: "Nigeria", CorrectAnswer: "Abuja", AnswerSet:["Victoria","Dodoma","Abuja","Port Louis"]},
		{Country: "North Korea", CorrectAnswer: "Pyongyang", AnswerSet:["Sri Jayawardenapura, Kotte","Baku","Pyongyang","Doha"]},
		{Country: "Norway", CorrectAnswer: "Oslo", AnswerSet:["Skopje","San Marino","Oslo","Copenhagen"]},
		{Country: "Oman", CorrectAnswer: "Muscat", AnswerSet:["Bishkek","Riyadh","Muscat","Ankara"]},
		{Country: "Pakistan", CorrectAnswer: "Islamabad", AnswerSet:["Hanoi","Jakarta","Islamabad","Baghdad"]},
		{Country: "Palau", CorrectAnswer: "Ngerulmud", AnswerSet:["Yaren","South Tarawa","Ngerulmud","Majuro"]},
		{Country: "Panama", CorrectAnswer: "Panama City", AnswerSet:["Havana","Belmopan","Panama City","Saint George's"]},
		{Country: "Papua New Guinea", CorrectAnswer: "Port Moresby", AnswerSet:["South Tarawa","Oagadugu","Port Moresby","Oniara"]},
		{Country: "Paraguay", CorrectAnswer: "Asunción", AnswerSet:["La Paz or Sucre","Bogotá","Asunción","Montevideo"]},
		{Country: "Peru", CorrectAnswer: "Lima", AnswerSet:["Buenos Aires","Asunción","Lima","La Paz or Sucre"]},
		{Country: "Philippines", CorrectAnswer: "Manila", AnswerSet:["Singapore","Kuala Lumpur","Manila","Malé"]},
		{Country: "Poland", CorrectAnswer: "Warsaw", AnswerSet:["Sofia","Brussels","Warsaw","Reykjavík"]},
		{Country: "Portugal", CorrectAnswer: "Lisbon", AnswerSet:["Paris","Copenhagen","Lisbon","Sofia"]},
		{Country: "Qatar", CorrectAnswer: "Doha", AnswerSet:["Baghdad","Abu Dhabi","Doha","Baku"]},
		{Country: "Romania", CorrectAnswer: "Bucharest", AnswerSet:["Berlin","Madrid","Bucharest","Budapest"]},
		{Country: "Russia", CorrectAnswer: "Moscow", AnswerSet:["Madrid","Budapest","Moscow","London"]},
		{Country: "Rwanda", CorrectAnswer: "Kigali", AnswerSet:["Asmara","Nairobi","Kigali","Malabo"]},
		{Country: "Samoa", CorrectAnswer: "Apia", AnswerSet:["Canberra","Honiara","Apia","Ngerulmud"]},
		{Country: "San Marino", CorrectAnswer: "San Marino", AnswerSet:["Rome","Valletta","San Marino","Oslo"]},
		{Country: "São Tomé & Príncipe", CorrectAnswer: "São Tomé", AnswerSet:["Windhoek","Dakar","São Tomé","Bissau"]},
		{Country: "Saudi Arabia", CorrectAnswer: "Riyadh", AnswerSet:["Dhaka","Damascus","Riyadh","Abu Dhabi"]},
		{Country: "Senegal", CorrectAnswer: "Dakar", AnswerSet:["Lilongwe","Yamoussoukro","Dakar","Gaborone"]},
		{Country: "Serbia", CorrectAnswer: "Belgrade", AnswerSet:["Budapest","Riga","Vienna","Belgrade"]},
		{Country: "Seychelles", CorrectAnswer: "Victoria", AnswerSet:["Dakar","Gaborone","Djibouti","Victoria"]},
		{Country: "Sierra Leone", CorrectAnswer: "Freetown", AnswerSet:["Algiers","Cairo","Nairobi","Freetown"]},
		{Country: "Singapore", CorrectAnswer: "Singapore", AnswerSet:["Sana'a","Tehran","Kuala Lumpur","Singapore"]},
		{Country: "Slovakia", CorrectAnswer: "Bratislava", AnswerSet:["Ljubljana","Luxembourg","Chișinău","Bratislava"]},
		{Country: "Slovenia", CorrectAnswer: "Ljubljana", AnswerSet:["Luxembourg","Paris","Brussels","Ljubljana"]},
		{Country: "Solomon Islands", CorrectAnswer: "Honiara", AnswerSet:["Wellington","Yaren","Apia","Honiara"]},
		{Country: "Somalia", CorrectAnswer: "Mogadishu", AnswerSet:["Bamako","Harare","Kampala","Mogadishu"]},
		{Country: "South Africa", CorrectAnswer: "Pretoria, Cape Town or Bloemfontein", AnswerSet:["Abuja","Bamako","Algiers","Pretoria, Cape Town or Bloemfontein"]},
		{Country: "South Korea", CorrectAnswer: "Seoul", AnswerSet:["Phnom Penh","Kuwait City","Pyongyang","Seoul"]},
		{Country: "South Sudan", CorrectAnswer: "Juba", AnswerSet:["Kampala","Djibouti","Tunis","Juba"]},
		{Country: "Spain", CorrectAnswer: "Madrid", AnswerSet:["Riga","Amsterdam","Berlin","Madrid"]},
		{Country: "Sri Lanka", CorrectAnswer: "Sri Jayawardenapura, Kotte", AnswerSet:["Dushanbe","Nicosia","Tehran","Sri Jayawardenapura, Kotte"]},
		{Country: "St. Kitts & Nevis", CorrectAnswer: "Basseterre", AnswerSet:["Nassau","Havana","Kingstown","Basseterre"]},
		{Country: "St. Lucia", CorrectAnswer: "Castries", AnswerSet:["Kingstown","Bridgetown","Moroni","Castries"]},
		{Country: "St. Vincent & the Grenadines", CorrectAnswer: "Kingstown", AnswerSet:["Panama City","Roseau","Nassau","Kingstown"]},
		{Country: "Sudan", CorrectAnswer: "Khartoum", AnswerSet:["Bangui","Niamey","Bamako","Khartoum"]},
		{Country: "Suriname", CorrectAnswer: "Paramaribo", AnswerSet:["Brasília","La Paz or Sucre","Port Vila","Paramaribo"]},
		{Country: "Swaziland", CorrectAnswer: "Mbabane", AnswerSet:["Kinshasa","Windhoek","Cairo","Mbabane"]},
		{Country: "Sweden", CorrectAnswer: "Stockholm", AnswerSet:["Copenhagen","Skopje","Valletta","Stockholm"]},
		{Country: "Switzerland", CorrectAnswer: "Bern", AnswerSet:["Warsaw","Tallinn","Vilnius","Bern"]},
		{Country: "Syria", CorrectAnswer: "Damascus", AnswerSet:["Bandar Seri Begawan","Taipei","Dushanbe","Damascus"]},
		{Country: "Taiwan", CorrectAnswer: "Taipei", AnswerSet:["Beijing","Pyongyang","Kuwait City","Taipei"]},
		{Country: "Tajikistan", CorrectAnswer: "Dushanbe", AnswerSet:["Kuwait City","Tokyo","Kathmandu","Dushanbe"]},
		{Country: "Tanzania", CorrectAnswer: "Dodoma", AnswerSet:["Bujumbura","Juba","Monrovia","Dodoma"]},
		{Country: "Thailand", CorrectAnswer: "Bangkok", AnswerSet:["Ankara","Bandar Seri Begawan","Yerevan","Bangkok"]},
		{Country: "Togo", CorrectAnswer: "Lomé", AnswerSet:["Nairobi","Tripoli","Mbabane","Lomé"]},
		{Country: "Tonga", CorrectAnswer: "Nukuʻalofa", AnswerSet:["Port Moresby","Apia","Honiara","Nukuʻalofa"]},
		{Country: "Trinidad & Tobago", CorrectAnswer: "Port-of-Spain", AnswerSet:["Mexico City","Bridgetown","San Salvador","Port-of-Spain"]},
		{Country: "Tunisia", CorrectAnswer: "Tunis", AnswerSet:["Monrovia","Lomé","Antananarivo","Tunis"]},
		{Country: "Turkey", CorrectAnswer: "Ankara", AnswerSet:["Naypyidaw","Tashkent","Muscat","Ankara"]},
		{Country: "Turkmenistan", CorrectAnswer: "Ashgabat", AnswerSet:["Manila","Islamabad","Naypyidaw","Ashgabat"]},
		{Country: "Tuvalu", CorrectAnswer: "Funafuti", AnswerSet:["Apia","Canberra","Wellington","Funafuti"]},
		{Country: "Uganda", CorrectAnswer: "Kampala", AnswerSet:["Harare","Kinshasa","Pretoria, Cape Town or Bloemfontein","Kampala"]},
		{Country: "Ukraine", CorrectAnswer: "Kiev", AnswerSet:["Amsterdam","Andorra la Vella","Stockholm","Kiev"]},
		{Country: "United Arab Emirates", CorrectAnswer: "Abu Dhabi", AnswerSet:["Kabul","New Delhi","Jakarta","Abu Dhabi"]},
		{Country: "United Kingdom", CorrectAnswer: "London", AnswerSet:["Zagreb","Lisbon","Helsinki","London"]},
		{Country: "United States", CorrectAnswer: "Washington D.C.", AnswerSet:["Port-of-Spain","Nassau","Mexico City","Washington D.C."]},
		{Country: "Uruguay", CorrectAnswer: "Montevideo", AnswerSet:["Asunción","Georgetown","Santiago","Montevideo"]},
		{Country: "Uzbekistan", CorrectAnswer: "Tashkent", AnswerSet:["Malé","Doha","Kinshasa","Tashkent"]},
		{Country: "Vanuatu", CorrectAnswer: "Port Vila", AnswerSet:["Palikir","Nukuʻalofa","Funafuti","Port Vila"]},
		{Country: "Vatican City", CorrectAnswer: "Vatican City", AnswerSet:["Valletta","Belgrade","Minsk","Vatican City"]},
		{Country: "Venezuela", CorrectAnswer: "Caracas", AnswerSet:["Bogotá","Paramaribo","Lima","Caracas"]},
		{Country: "Vietnam", CorrectAnswer: "Hanoi", AnswerSet:["Riyadh","Baghdad","Tbilisi","Hanoi"]},
		{Country: "Yemen", CorrectAnswer: "Sana'a", AnswerSet:["Jerusalem","Kathmandu","Bangkok","Sana'a"]},
		{Country: "Zambia", CorrectAnswer: "Lusaka", AnswerSet:["Gaborone","Brazzaville","N'Djamena","Lusaka"]},
		{Country: "Zimbabwe", CorrectAnswer: "Harare", AnswerSet:["Yamoussoukro","Maseru","Maputo","Harare"]}
	];

	var pagenum = 0;
	var clickAnswer = " "
	var correctAnswerCounter = 0;
	var quizz_array = [];
	
	function GenerateQuestions () {
			var i = 0;
			while (quizz_array.length <= 9) {
				var random_number = Math.floor((Math.random()*question_answers.length));
				if ($.inArray(random_number, quizz_array) == -1) {
					quizz_array.push(random_number);
					i++;
				}
			};

	// console.log(quizz_array);
	};
	
	GenerateQuestions();

	var question_answers2 = [
		question_answers[quizz_array[0]],
		question_answers[quizz_array[1]],
		question_answers[quizz_array[2]],
		question_answers[quizz_array[3]],
		question_answers[quizz_array[4]],
		question_answers[quizz_array[5]],
		question_answers[quizz_array[6]],
		question_answers[quizz_array[7]],
		question_answers[quizz_array[8]],
		question_answers[quizz_array[9]]
	];

	// console.log (question_answers2);

	function Questions(value) {
			$("#qnum").html(value+1);
			$("#countryquestion").html(question_answers2[value].Country);
			$("#ans0").html(question_answers2[value].AnswerSet[0]);
			$("#ans1").html(question_answers2[value].AnswerSet[1]);
			$("#ans2").html(question_answers2[value].AnswerSet[2]);
			$("#ans3").html(question_answers2[value].AnswerSet[3]);
		};

	Questions(pagenum);
	var WrongAnswers = [];
	var Progress = function (arg, x) {
		if (arg) {
			$(".fa-square").eq(x).toggleClass("fa-check-square");
			correctAnswerCounter++;
		} else {
			$(".fa-square").eq(x).toggleClass("fa-minus-square");
			WrongAnswers.push(x);
		}
	};

	var FinalResult = function (n) {
		switch (n) {
			case 0:
			case 1:
			case 2:
				return ("Ouch! You better go back to your books!");
				break;
			case 3:
			case 4:
				return ("Oh my! At least you got some answers correct. Good luck next time!");
				break;
			case 5:
			case 6:
				return ("Not bad! Keep practicing!");
				break;
			case 7:
			case 8:
				return ("Congratulations! Great job. Pretty neat!");
				break;
			case 9:
			case 10:
				return ("Awesome! You know your stuff! That's rad!");
				break;
		}
	}


	$(".items-list").on('click', function() {
		clickAnswer = $(this).text();
		checkAnswer = (clickAnswer == question_answers2[pagenum].CorrectAnswer);
		if (pagenum<9) {
			Progress(checkAnswer, pagenum);
			// console.log("correct answer: "+question_answers2[pagenum].CorrectAnswer);
			// console.log("answer clicked: "+clickAnswer);
			// console.log("was the answer corret? "+checkAnswer);
			pagenum++;
			Questions(pagenum);
			
			}
		else {
			Progress(checkAnswer, pagenum);
			$(".game").hide();
			$(".results").show();	
			$(".results-number").find($("span")).html(correctAnswerCounter);
			$(".congrats-text").html(FinalResult(correctAnswerCounter));
			if (correctAnswerCounter != 10) {
				$(".feedback").show();
				for (var w=0;w<WrongAnswers.length;w++) {
					$(".feedback-list").append("<li>"+question_answers2[WrongAnswers[w]].Country+": "+question_answers2[WrongAnswers[w]].CorrectAnswer);
				}
			};
			// console.log(WrongAnswers);
			// console.log(WrongAnswers.length);
		}
		

	});

	$("#restartbutton").on('click',function() {
		$(document).reload();
	})

});