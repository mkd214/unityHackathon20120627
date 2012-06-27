#pragma strict

var score : int;

function Start () {
	score = 0;
	isGameOver = false;
}

var scoreGUI : GameObject;
var gameOverGUI : GameObject;

var sphere : GameObject;
var cylinder : GameObject;
var cylinderBody : GameObject;

var moveVolume : double = 0.1;

var isMoving : boolean = false;
var isGameOver : boolean = false;

var white : Material;
var yellow : Material;
var blue : Material;
var red : Material;
var green : Material;
var parple : Material;

var color :int = 0;

var particle : GameObject;

function Update () {
	scoreGUI.guiText.text = "Score " + score;
	switch(color){
	case 0:
		this.renderer.material = white;
		sphere.renderer.material = white;
		cylinderBody.renderer.material = white;
		break;
	case 1:
		this.renderer.material = yellow;
		sphere.renderer.material = yellow;
		cylinderBody.renderer.material = yellow;
		break;
	case 2:
		this.renderer.material = blue;
		sphere.renderer.material = blue;
		cylinderBody.renderer.material = blue;
		break;
	case 3:
		this.renderer.material = red;
		sphere.renderer.material = red;
		cylinderBody.renderer.material = red;
		break;
	case 4:
		this.renderer.material = green;
		sphere.renderer.material = green;
		cylinderBody.renderer.material = green;
		break;
	case 5:
		this.renderer.material = parple;
		sphere.renderer.material = parple;
		cylinderBody.renderer.material = parple;
		break;
	}

	if(Input.GetButton("Fire2")){
		
		if(!isMoving){
			transform.eulerAngles.z += 2;
		}
	}else if(Input.GetButton("Fire1")){
		//sphere.transform.position.y += moveVolume * Mathf.Cos(transform.eulerAngles.z);
		//sphere.transform.position.x -= moveVolume * Mathf.Sin(transform.eulerAngles.z);
		sphere.transform.localPosition.y += moveVolume;
		cylinder.transform.localScale.y += moveVolume/2;
		isMoving = true;
	}else{
	//print(cylinder.transform.localScale.y);
		if(cylinder.transform.localScale.y <= 1.0f){
			sphere.transform.localPosition.y = 2;
			cylinder.transform.localScale.y = 1.0f;		
			isMoving = false;
		}else{
			isMoving = true;
			this.transform.localPosition.x-= moveVolume * Mathf.Sin(transform.eulerAngles.z * Mathf.PI / 180);
			this.transform.localPosition.y+= moveVolume * Mathf.Cos(transform.eulerAngles.z * Mathf.PI / 180);
		
			
			//sphere.transform.position.y -= moveVolume * Mathf.Cos(transform.eulerAngles.z);
			//sphere.transform.position.x += moveVolume * Mathf.Sin(transform.eulerAngles.z);
			sphere.transform.localPosition.y -= moveVolume;
			cylinder.transform.localScale.y -= moveVolume/2;
		}
	}
}

function OnCollisionEnter(collision : Collision) {
	if(collision.gameObject.tag == "Enemy"){
		if(parseInt(collision.gameObject.name) == color){
			Destroy(collision.gameObject);
			color = Random.Range(0,6);
			if(!isGameOver){
				score++;
				Instantiate(particle,collision.gameObject.transform.position,transform.rotation);
			}
		}else{
			isGameOver = true;
			gameOverGUI.active = true;
		}
	}
}
function OnGUI() {
	if(isGameOver){
    	if (GUI.Button(Rect(100,100,50,50),"retry")){
	    	Application.LoadLevel("scene");
	    }
	}
}