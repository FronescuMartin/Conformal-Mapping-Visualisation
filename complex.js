class Complex{
  constructor(a,b){
    this.a=a;
    this.b=b;
    this.r=sqrt(this.a*this.a+this.b*this.b);
    this.theta=atan2(b/this.r, a/this.r);
  }
  show(){
    strokeWeight(2);
    point(this.a*unit, this.b*unit);
  }
  getCartesian(){
    this.a=this.r*cos(this.theta);
    this.b=this.r*sin(this.theta);
    console.log("HUH");
  }
  raiseToPower(p){
    let nTheta=this.theta*p;
    let nr=pow(this.r,p);
    let x=nr*cos(nTheta);
    let y=nr*sin(nTheta);
    let raised=new Complex(x,y);
    return raised;
  }
}