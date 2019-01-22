function surfaceRectangle() {
    let Width  = prompt("vul de breedte van de rechthoek in", "vul hier de breedte in");
    let Height = prompt("vul de lengte van de rechthoek in", "vul hier de lengte in");
    let area = Width*Height;
    alert("het gebied van de rechthoek is: "+area)
  }
  function perimeterRectangle(){
    let Width  = prompt("vul de breedte van de rechthoek in", "vul hier de breedte in");
    let Height = prompt("vul de lengte van de rechthoek in", "vul hier de lengte in");
    let area = (2*Width)+(2*Height);
    alert("de omtrek van een rechthoek is: "+area)
  }