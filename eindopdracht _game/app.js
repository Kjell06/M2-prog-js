class App
{
    runApplication()
    {
        console.log("Hello world!")

        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");

        
        /*Border*/
        g.beginPath();
        g.fillStyle = "darkgreen";
        g.moveTo(80, 80)
        g.lineTo(1450, 80)
        g.lineTo(1450, 800)
        g.lineTo(80, 800)

        g.closePath();
        g.stroke();
        g.fill();


        /*Inside*/
        g.beginPath();
        g.fillStyle = "white";
        g.moveTo(100, 100)
        g.lineTo(1430, 100)
        g.lineTo(1430, 700)
        g.lineTo(100, 700)

        g.closePath();
        g.stroke();
        g.fill();

        /*text*/
        g.font="40px Comic Sans MS";
        g.fillStyle = "red";
        g.textAlign = "center";
        g.fillText("Merry Christmas and a Happy New year!", canvas.width/4, canvas.height/1.3);


        /*River*/
        g.beginPath();
        g.fillStyle = "lightblue";
        g.moveTo(270,425)
        g.lineTo(270,460)
        g.lineTo(1430,462)
        g.lineTo(1430,430)
        g.closePath();
        g.stroke();
        g.fill();


        /*Road*/
        g.beginPath();
        g.fillStyle = "gray";
        g.moveTo(200, 200)
        g.lineTo(1300, 200)
        g.lineTo(1300,600)
        g.lineTo(1175,600)
        g.lineTo(1175,300)
        g.lineTo(200,300)
        g.closePath();
        g.stroke();
        g.fill();

        


        /*Barn*/
        g.beginPath();
        g.fillStyle = "darkred";
        g.moveTo(910,530)
        g.lineTo(910,599)
        g.lineTo(1100,599)
        g.lineTo(1100,530)
        g.lineTo(1000,480)
        g.closePath();
        g.stroke();
        g.fill();


        /*Silo*/
        this.drawdop(g,"beige", 530,852.3)
        g.beginPath();
        g.fillStyle = "beige";
        g.moveTo(840,530)
        g.lineTo(840,599)
        g.lineTo(865,599)
        g.lineTo(865,530)
        g.closePath();
        g.stroke();
        g.fill();


        /*Field*/
        g.beginPath();
        g.fillStyle = "#D2691E";
        g.moveTo(410,530)
        g.lineTo(410,599)
        g.lineTo(700,599)
        g.lineTo(700,530)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.moveTo(410,590)
        g.lineTo(410,599)
        g.lineTo(700,599)
        g.lineTo(700,590)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.moveTo(410,560)
        g.lineTo(410,570)
        g.lineTo(700,570)
        g.lineTo(700,560)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.moveTo(410,530)
        g.lineTo(410,540)
        g.lineTo(700,540)
        g.lineTo(700,530)
        g.closePath();
        g.stroke();
        g.fill();
        


        /*Pond*/
        this.drawPond(g, "lightblue",520,230)
 
        
         /* Trees */
         this.drawboomstam(g, "brown",380,315)
         this.drawblaadjes(g, "green",310,330)
 
         this.drawboomstam(g, "brown",380,926)
         this.drawblaadjes(g, "green",310,940)
 
         this.drawboomstam(g, "brown",380,1105)
         this.drawblaadjes(g, "green",310,1120)
 
         this.drawboomstam(g, "brown",380,720)
         this.drawblaadjes(g, "green",310,735)
 
         this.drawboomstam(g, "brown",380,525)
         this.drawblaadjes(g, "green",310,538)



         /*House*/

        this.drawHouse(g,"yellow", 320, 240);
        this.drawHouse(g,"lime", 320, 440);
        this.drawHouse(g,"greenyellow", 320, 640);
        this.drawHouse(g,"orange", 320, 840);
        this.drawHouse(g,"darkred", 320, 1040);
        


        this.drawHouse(g,"yellow", 120, 240);
        this.drawHouse(g,"lime", 120, 440);
        this.drawHouse(g,"greenyellow", 120, 640);
        this.drawHouse(g,"orange", 120, 840);
        this.drawHouse(g,"orangered", 120, 1040);
        this.drawHouse(g,"darkred", 120, 1240);
    }

    /*House*/
    drawHouse(g, color, y, x){
        g.fillStyle = color;
        g.beginPath();
        g.moveTo(x, y)
        g.lineTo(x+30, y+30)
        g.lineTo(x+30, y+60)
        g.lineTo(x-30, y+60)
        g.lineTo(x-30, y+30)
        g.closePath();
        g.stroke();
        g.fill();
    }

    /*Silo*/
    drawdop(g, color,y,x,r){
        var r = 45
        g.fillStyle = color;
        g.beginPath()
        g.moveTo(x,y,r)
        g.arc(x,y,12.9, 0,2 * Math.PI, false)
        g.stroke()
        g.fill()
    }


    drawPond(g, color, y, x){
        var r = 45
        g.fillStyle = color;
        g.beginPath()
        g.moveTo(x,y,r)
        g.arc(x,y,105, 0,2 * Math.PI, false)
        g.stroke()
        g.fill()

    }

    drawblaadjes(g, color, y, x){
        var r = 45
        g.fillStyle = color;
        g.beginPath()
        g.moveTo(x,y,r)
        g.arc(x,y,35, 0,2 * Math.PI, false)
        g.stroke()
        g.fill()
    }

    drawboomstam(g, color, y, x){
        var r = 45
        g.fillStyle = color;
        g.beginPath()
        g.moveTo(x,y)
        g.lineTo(x+30,y)
        g.lineTo(x+15,y-70)
        g.stroke()
        g.fill()
    }

}

    let app = new App();
app.runApplication();