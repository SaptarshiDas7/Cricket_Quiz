
	var score=0;
	document.getElementById("ques_block1").style.display="none";
	document.getElementById("ques_block2").style.display="none";
	document.getElementById("ques_block3").style.display="none";
	document.getElementById("ques_block4").style.display="none";
	document.getElementById("ques_block5").style.display="none";
	document.getElementById("ques_block6").style.display="none";
	document.getElementById("ques_block7").style.display="none";
	document.getElementById("ques_block8").style.display="none";
	document.getElementById("ques_block9").style.display="none";
	document.getElementById("ques_block10").style.display="none";
	document.getElementById("finish_block").style.display="none";
	document.getElementById("responses").style.display="none";
	
	var arr=new Array();
	function quiz()
	{
		document.getElementById("block").style.display="none";
		document.getElementById("ques_block1").style.display="block";
	}
	
	
	function q2()
	{
		var res="";
		if(document.getElementById("right1").checked==true)
		{
			score+=6;
			res+="Right";
		}
		else if((document.getElementById("w11").checked==false)&&
		(document.getElementById("w12").checked==false)&&(document.getElementById("w13").checked==false))
	
		{
			res+="Not Attempted";
		}
		else
		{
			score-=3;
			res+="Wrong";
		}
		arr[0]=res;
		document.getElementById("ques_block1").style.display="none";
		document.getElementById("ques_block2").style.display="block";
	}
	
	
	function q3()
	{
		var res="";
		if(document.getElementById("right2").checked==true)
		{
			score+=6;
			res+="Right";
		}
		else if((document.getElementById("w21").checked==false)&&
		(document.getElementById("w22").checked==false)&&(document.getElementById("w23").checked==false))
		{
			res+="Not Attempted";
		}
		else
		{
			score-=3;
			res+="Wrong";
		}
		arr[1]=res;
		document.getElementById("ques_block2").style.display="none";
		document.getElementById("ques_block3").style.display="block";
	}
	

	function q4()
	{
		var res="";
		if(document.getElementById("right3").checked==true)
		{
			score+=6;
			res+="Right";
		}
		else if((document.getElementById("w31").checked==false)&&
		(document.getElementById("w32").checked==false)&&(document.getElementById("w33").checked==false))
		{
			res+="Not Attempted";
		}
		else
		{
			score-=3;
			res+="Wrong";
		}
		arr[2]=res;
		document.getElementById("ques_block3").style.display="none";
		document.getElementById("ques_block4").style.display="block";
	}
	
	
	function q5()
	{
		var res="";
		if(document.getElementById("right4").checked==true)
		{
			score+=6;
			res+="Right";
		}
		else if((document.getElementById("w41").checked==false)&&
		(document.getElementById("w42").checked==false)&&(document.getElementById("w43").checked==false))
		{
			res+="Not Attempted";
		}
		else
		{
			score-=3;
			res+="Wrong";
		}
		arr[3]=res;
		document.getElementById("ques_block4").style.display="none";
		document.getElementById("ques_block5").style.display="block";
	}
	
	
	function q6()
	{
		var res="";
		if(document.getElementById("right5").checked==true)
		{
			score+=6;
			res+="Right";
		}
		else if((document.getElementById("w51").checked==false)&&
		(document.getElementById("w52").checked==false)&&(document.getElementById("w53").checked==false))
		{
			res+="Not Attempted";
		}
		else
		{
			score-=3;
			res+="Wrong";
		}
		arr[4]=res;
		document.getElementById("ques_block5").style.display="none";
		document.getElementById("ques_block6").style.display="block";
	}
	
	function q7()
	{
		var res="";
		if(document.getElementById("right6").checked==true)
		{
			score+=6;
			res+="Right";
		}
		else if((document.getElementById("w61").checked==false)&&
		(document.getElementById("w62").checked==false)&&(document.getElementById("w63").checked==false))
		{
			res+="Not Attempted";
		}
		else
		{
			score-=3;
			res+="Wrong";
		}
		arr[5]=res;
		document.getElementById("ques_block6").style.display="none";
		document.getElementById("ques_block7").style.display="block";
	}
	
	
	function q8()
	{
		var res="";
		if(document.getElementById("right7").checked==true)
		{
			score+=6;
			res+="Right";
		}
		else if((document.getElementById("w71").checked==false)&&
		(document.getElementById("w72").checked==false)&&(document.getElementById("w73").checked==false))
		{
			res+="Not Attempted";
		}
		else
		{
			score-=3;
			res+="Wrong";
		}
		arr[6]=res;
		document.getElementById("ques_block7").style.display="none";
		document.getElementById("ques_block8").style.display="block";
	}
	
	
	function q9()
	{
		var res="";
		if(document.getElementById("right8").checked==true)
		{
			score+=6;
			res+="Right";
		}
		else if((document.getElementById("w81").checked==false)&&
		(document.getElementById("w82").checked==false)&&(document.getElementById("w83").checked==false))
		{
			res+="Not Attempted";
		}
		else
		{
			score-=3;
			res+="Wrong";
		}
		arr[7]=res;
		document.getElementById("ques_block8").style.display="none";
		document.getElementById("ques_block9").style.display="block";
	}
	
	
	
	function q10()
	{
		var res="";
		if(document.getElementById("right9").checked==true)
		{
			score+=6;
			res+="Right";
		}
		else if((document.getElementById("w91").checked==false)&&
		(document.getElementById("w92").checked==false)&&(document.getElementById("w93").checked==false))
		{
			res+="Not Attempted";
		}
		else
		{
			score-=3;
			res+="Wrong";
		}
		arr[8]=res;
		document.getElementById("ques_block9").style.display="none";
		document.getElementById("ques_block10").style.display="block";
	}
	
	
	function next()
	{
		var res="";
		if(document.getElementById("right10").checked==true)
		{
			score+=6;
			res+="Right";
		}
		else if((document.getElementById("w101").checked==false)&&
		(document.getElementById("w102").checked==false)&&(document.getElementById("w103").checked==false))
		{
			res+="Not Attempted";
		}
		else
		{
			score-=3;
			res+="Wrong";
		}
		arr[9]=res;
		document.getElementById("ques_block10").style.display="none";
		document.getElementById("finish_block").style.display="block";
	}
	
	
	function ans()
	{
		document.getElementById("finish_block").style.display="none";
		document.getElementById("responses").style.display="block";
		
		var str="<h2>"+"Your result!!!"+"</h2>";
		console.log(arr[0]);
		for(var i=0;i<arr.length;i++)
		{
			str+="<h2>"+(i+1)+"."+arr[i]+"</h2>";
		}
		str+="<br>"+"<h2>"+"Your score: "+score+"</h2>";
		if(score>40)
			str+="<br>"+"<h2>"+"You are a cricket genius."+"</h2>";
		else if(score>20)
			str+="<br>"+"<h2>"+"You have a moderate knowledge of cricket."+"</h2>";
		else
			str+="<br>"+"<h2>"+"You are a novice in cricket."+"</h2>";
		document.getElementById("responses").innerHTML=str;
	}
	