$(function () {
	function json_read(level,id)
	{
		console.log("in");
		var filename = null;
		switch(level)
		{
			case 0:
			  console.log("switch in");
			  filename = "../json/easy.json"
			  break;
			case 1:
			  filename = "../json/normal.json"
        break;
      case 2:
        filename = "../json/hard.json"
        break;
		}
    console.log("filename" + filename);
		$.getJSON(filename,function(rank){
			console.log("JSON");
      for(var i = 0 ; i < 10 ; i++)
      {
      	var msg = "<div class=\"result\">" + (i+1) + "位" + "  " + "Name: " + rank[i].name + "  " + "Time: " + rank[i].time + "</div>" ;
      	$("#result").append(msg);
      }
		});
	}
  
  $('#easy_disp').mouseover(function()
  {
	  json_read(0,'#easy_disp');
  });
});