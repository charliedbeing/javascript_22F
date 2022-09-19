module.exports = function(courseName,desc){
    this.courseName = courseName;
    this.desc =desc;

    this.detail = function(){
        return this.courseName + " " +this.desc;
    }
}