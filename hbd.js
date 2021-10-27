function new_img() 
{

fabric.Image.fronURL('16714-birthday-cake-760*580.jpg',function (Img) {
block_image_object = Img;

block_image_object.scaleToWidth(700);
block_image_object.scaleToHeight(510);
block_image_object.set({
top:0,
left:0
});
canvas.add(block_image_object);
});
}

function sp() {
    x,play();
}