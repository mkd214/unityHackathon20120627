#pragma strict

private var count : int = 0;
function Start () {
	
}
var teki :GameObject;

var white : Material;
var yellow : Material;
var blue : Material;
var red : Material;
var green : Material;
var parple : Material;

function Update () {
	count++;
	if(count > 100){
		count = 0;
		var color : int = Random.Range(0,6);
		var enemy : GameObject = Instantiate(teki,this.transform.position,transform.rotation);
		enemy.transform.position.z=0;
		enemy.name = color+"";
		switch(color){
		case 0:
			enemy.renderer.material = white;
			break;
		case 1:
			enemy.renderer.material = yellow;
			break;
		case 2:
			enemy.renderer.material = blue;
			break;
		case 3:
			enemy.renderer.material = red;
			break;
		case 4:
			enemy.renderer.material = green;
			break;
		case 5:
			enemy.renderer.material = parple;
			break;
		}
	}
}