class Claim{
    constructor(string){
        console.log('*<')
        console.log(string)
        const regex = /#(?<id>\d) @ (?<left>\d*),(?<top>\d*): (?<width>\d*)x(?<height>\d*)/gm;
        let res = regex.exec(string)
        this.id = res[1]
        this.left = parseInt(res[2])
        this.top = parseInt(res[3])
        this.width = parseInt(res[4])
        this.height = parseInt(res[5])
    }
}
class ManageMaterial{
    static  AreaOfIntersect(d1, d2){
        var x_overlap = Math.max(0, Math.min(d1.left + d1.width ,d2.left + d2.width) - Math.max(d1.left,d2.left))
        var y_overlap = Math.max(0, Math.min(d1.top + d1.height, d2.top + d2.height) - Math.max(d1.top,d2.top));
        return (x_overlap * y_overlap)
    }

    static Intersect(claim1, claim2){
        // is Top Left of claim in claim 
        function pointInZone(x,y,zone){
            var topLeftInClaim2 =   (x >= claim2.left) &&
            (x <= claim2.left + claim2.width) &&
            (y >= claim2.top) &&
            (y <= claim2.top + claim2.height) 
            return topLeftInClaim2
        }
        var topLeftInClaim2 =  pointInZone(claim1.left,claim1.top,claim2)
        var topRightInClaim2 =  pointInZone(claim1.left + claim1.width,claim1.top,claim2)
        var bottomLeftInClaim2 =  pointInZone(claim1.left ,claim1.top +claim1.top,claim2)
    
        //  var intersectVertical =   (claim1.top >= claim2.top) &&(claim1.top <= claim2.top + claim2.height)
        //  return intersectHorizontal && intersectVertical
    }
    
}

module.exports = {ManageMaterial,  Claim}

