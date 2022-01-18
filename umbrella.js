class Umbrella extends BaseClass{
    constructor(x, y, height, angle){
        super(x, y, 200, height);
        this.image = loadImage("./sprites/umbrella.png");
        //to set the angle for logs
        Matter.Body.setAngle(this.body, angle);
    }
}
