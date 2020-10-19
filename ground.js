class Ground {
    constuctor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.groundbody= Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.groundbody)
    }
    display(){
    console.log(this.groundbody);
        rectMode(CENTER);
        fill('green');
        rect(this.groundbody.position.x, this.groundbody.position.y, this.width, this.height);
        pop();
    }
}