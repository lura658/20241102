let font;  //載入字型文字
let points = [];//轉成點狀文字
let angle = 0 //宣告變數，角度

function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
 font = loadFont("font/KleeOne-Regular.ttf") //載入文字樣式
}

function setup() {
  createCanvas(windowWidth,windowHeight); //畫面設定為視窗大小
  angleMode(DEGREES) //旋轉以角度作為單位
}


function draw() {
  background("#fbfbf2");//背景顏色
  
  noFill() //不要填滿
  translate(-50,-10) //原點(0,0)移動至(-50,-10) 
  for(i=0;i<100;i++){//迴圈
    for(j=0;j<100;j++){
      stroke("#cfdbd5")//線條顏色
      strokeWeight(1)//線條粗細
      ellipse(25+50*i,25+50*j,30+mouseX/20,40+mouseY/20)//設定圓的大小、位置
      stroke("#89c2d9")
      rect(0+50*i,0+50*j,90+mouseX/20,50+mouseY/20)//設定方形大小、位置
      stroke("#d7bfbf")
      ellipse(50+50*i,50+50*j,50+mouseX/20,20+mouseY/20)
    }
  }
  

  translate(width/2,height/2)
  text('吳映璇', width/2, height/2,50,50); // 在螢幕中心繪製文字
  points = font.textToPoints("吳映璇", -190, 60, 150, {
    sampleFactor:0.15 //數字越小點數越少
  });
  
  
  
  translate(CENTER,0)
  rotate(angle)// 旋轉角度
  angle = sin(frameCount)*10 //隨著 frameCount 不斷增加，sin(frameCount)*10 的值會在  -10 到 10 之間週期性變化。
  

  for (let i=0; i<points.length-1; i++) {
    strokeWeight(5)
    stroke("#748cab")
    line(points[i].x,points[i].y,points[i+1].x,points[i+1].y)
 } 
}

  
