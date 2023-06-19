module.exports=function(firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.fullName=firstName+' '+lastName;
    return this.fullName;
}

