class Ground{
    constructor(x,y,weight,height){
        var option={
            isStatic:true
        }
        
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);


    }

    display(){
        var groundPos=this.body.position;		

        push()
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER)
        strokeWeight(4);
        fill("blue")
        rect(0,0,this.w, this.h);
        pop()      
    }
}
