var canvas=new fabric.Canvas("myCanvas");
block_img_width=30;
block_img_height=30;
player_x=10;
player_y=10;
player_object="";
block_img_object="";
function player_update() {
    fabric.Image.fromURL("player.png", function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, left:player_x
        });
        canvas.add(player_object);
    });
}

function new_img(get_img) {
    fabric.Image.fromURL(get_img, function(img){
        block_img_object=img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y, left:player_x
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if (e.shiftKey==true && keyPressed=='80'){
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if (e.shiftKey==true && keyPressed=='77'){
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if (keyPressed=='38'){
        up();
    }
    if (keyPressed=='40'){
        down();
    }
    if (keyPressed=='37'){
        left();
    }
    if (keyPressed=='39'){
        right();
    }

    if (keyPressed=='65'){
        new_img('captain_america_left_hand.png');
    }
    if (keyPressed=='66'){
        new_img('hulk_face.png');
    }
    if (keyPressed=='67'){
        new_img('hulk_left_hand.png');
    }
    if (keyPressed=='68'){
        new_img('hulk_legs.png');
    }
    if (keyPressed=='69'){
        new_img('hulk_right_hand.png');
    }
    if (keyPressed=='70'){
        new_img('hulkd_body.png');
    }
    if (keyPressed=='71'){
        new_img('ironman_body.png');
    }
    if (keyPressed=='72'){
        new_img('ironman_face.png');
    }
    if (keyPressed=='73'){
        new_img('ironman_left_hand.png');
    }
    if (keyPressed=='74'){
        new_img('ironman_legs.png');
    }
    if (keyPressed=='75'){
        new_img('ironman_right_hand.png');
    }
    if (keyPressed=='76'){
        new_img('spiderman_body.png');
    }
    if (keyPressed=='78'){
        new_img('spiderman_face.png');
    }
    if (keyPressed=='79'){
        new_img('spiderman_left_hand.png');
    }
    if (keyPressed=='81'){
        new_img('spiderman_legs.png');
    }
    if (keyPressed=='82'){
        new_img('spiderman_right_hand.png');
    }
    if (keyPressed=='83'){
        new_img('thor_face.png');
    }
    if (keyPressed=='84'){
        new_img('thor_left_hand.png');
    }
    if (keyPressed=='85'){
        new_img('thor_right_hand.png');
    }
}

function up(){
    if (player_y>=0){
        player_y=player_y-block_img_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (player_y<=500){
        player_y=player_y+block_img_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (player_x>0){
        player_x=player_x-block_img_width;
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x<850){
        player_x=player_x+block_img_width;
        canvas.remove(player_object);
        player_update();
    }
}