class TREE {
    Constructor () {
        var options = {
            isStatic : true,
        }
        this.image(x,y,options)
        this.image = loadImage("Plucking mangoes/tree.png");
    }
    display() {
        imageMode(CENTER);
        image(this.image,x,y,width,height);
    }
}