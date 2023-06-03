function render(data){
	var html = "<div class='comentBox'><span>"+data.name+"</span><div class='date'>"+data.date+"</div><p>"+data.coments+"</p></div><div class='clear'></div></div>";
	$('#container').append(html);
}


$(document).ready(function(){
//var coment=[{"name": "Wahaj","date": "23 april 2023","coments": "HI I AM WAHAJ" }];
	
	const date = new Date();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	// This arrangement can be altered based on how we want the date's format to appear.
	let currentDate = `${day}-${month}-${year}`;
	document.getElementById("date").value=currentDate;
	
	var coment=[];
	
	
	if(!localStorage.comentData){
		localStorage.comentData =[];
	}else{
		coment = JSON.parse(localStorage.comentData);
	}
	
	for (var i=0;i<coment.length;i++){
		render(coment[i]);
	}
	
	$('#addComent').click(function(){
		var add0bj = {
			"name": $('#name').val(),
			"date": $('#date').val(),
			"coments": $('#bodytext').val()
		};

		coment.push(add0bj);
		render(add0bj);
                localStorage.comentData=JSON.stringify(coment);


		$('#name').val("");
		$('#bodytext').val("");
		
	});
	
	});
	
	
