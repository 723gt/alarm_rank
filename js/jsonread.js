$(function () {
	function json_read(level,id)
	{
		console.log("in");
		var filename = null;
		switch(level)
		{
			case 0:
			  filename = "../json/easy.json"
			  break;
			case 1:
			  filename = "../json/normal.json"
        break;
      case 2:
        filename = "../json/hard.json"
        break;
		}

		$.getJSON(filename,function(rank){
			console.log("JSON");
      for(var i = 0 ; i < 10 ; i++)
      {
      	var msg = (i+1) + "位" + "  " + "Name: " + rank[i].name + "  " + "Time: " + rank[i].time;
      	$(id).append(msg);
      }
		});
	}
  
  if($('#easy_disp').length)
  {
	  json_read(0,'#easy_disp');
  }
});