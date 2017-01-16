$(function () {
	function json_read(level)
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
      for(var i = 0 ; i < 10 ; i++)
      {
      	var msg = (i+1) + "位" + "  " + "Name: " + rank[i].name + "  " + "Time: " + rank[i].time;
      	$(rank_disp).append(msg);
      }
		});
	}
});