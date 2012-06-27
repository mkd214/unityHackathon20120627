#pragma strict

private var moveVolume1 : float;
private var moveVolume2 : float;

function Start () {
	moveVolume1 = Random.Range(-0.05,0.05);
	moveVolume2 = Random.Range(-0.05,0.05);
}

function Update () {
	transform.Translate(moveVolume1,moveVolume2,0);
}