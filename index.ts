class hero{
name:string='';
id:number=1;
joon:number=100;
hunger:number=10;
attack(){
this.joon -=10;
this.hunger -=1;
}
die(){
    return this.joon<=0 || this.hunger<=0;
    
}constructor(id:number){
    this.name=`Hero ${id}`;
    this.id=id;
    this.attack();
    this.die();

}
}
class soldier extends hero {
    name:string='';
    id: number=1;
    power:number=5;
    gun:number=2;
    attack(): void {
        this.gun-=1;
        this.power-=1;
        this.joon -= 10;
        this.hunger-1;
    }
    die(){
        return this.joon<=0 || this.hunger<=0 || this.power <=0|| this.gun<=0
    }
   constructor(id:number){
       super(id);
       this.name= `Soldier ${id}`
       this.attack();
       this.die();
       }
   }

   class bobsfangi extends hero{
       constructor(id:number){
           super(id);
           this.name= `bobsfangi ${id}`
           this.attack();
           this.die();
       }
   }

   class Tribe {
       name:string='';
       id:number=1;
       heroes: hero []=[];
       constructor(id:number){
           this.name=`Tribe ${1}`
           this.id = id
       }
   }

   const Tribe1 = new Tribe(1);
   const Tribe2= new Tribe(2);

   const adad = Math.floor(Math.random()*10 + 2);
   const adad2 = Math.floor(Math.random()*10 + 2);

   for (let i=0; i<adad;i++){
       const sold = new soldier(i);
       const bob= new bobsfangi(i);
       Tribe1.heroes.push(sold);
       Tribe1.heroes.push(bob);
   }
   for (let i=0; i<adad2;i++){
    const sold = new soldier(i);
    const bob= new bobsfangi(i);
    Tribe2.heroes.push(sold);
    Tribe2.heroes.push(bob);
}

function attackby(who:hero){
    
    Tribe1.heroes.forEach(h =>{
        while (!h.die()){
        h.attack();
        console.log(`Tribe 1 ${h.name} is attacking Tribe 2 ${who.name}`)}
        if (h.die()){
            console.log(`Tribe 1 ${h.name} died by Tribe 2 ${who.name}`)  
        }
    })

}
function war(){
Tribe2.heroes.forEach(h2 =>{
  attackby(h2);  
})
}
war();

