class Paper {
constructor(){

    var options = {

        isStatic:false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2

    }

    this.body = Bodies.circle(200,450,40,options)



}

  display(){
    var pos = this.body.position
    ellipseMode(CENTER)
    fill("purple")
    ellipse(200,450,40)

  }


}