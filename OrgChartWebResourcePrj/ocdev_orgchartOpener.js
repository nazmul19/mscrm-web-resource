function openorgchart(){
	var id = window.parent.Xrm.Page.data.entity.getId();
	id = id.substring(1,37);
       console.log("id="+id);
	window.open('WebResources/ocdev_orgchart.html?data=objectid%3d'+id);
}