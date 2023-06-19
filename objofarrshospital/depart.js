const hospitaldetails={    
    doctor:[ {  
      name:'1',
      mobileno:'a',
      specialisation:'erf',
       doctorid:'124'

   
    }],
    patient:[{
        name:'wqe',
        mobileno:'12355',
        age:'3',
        doctorid:'12',
        patientid:'124'
    
    
    }],
 
     
    disease:[{
        feaver:'sad',
        cold:'sdfsa',
        cough:'efs',
        patientid:'32'
    }]
 }
 
 const prompt=require("prompt-sync")();
 const n=prompt("enter the noof fields:");
 for(i=0;i<n;i++){
    const fieldname=prompt("enter the fieldname:");
    console.log(fieldname)
    let keys=Object.keys(hospitaldetails);
    const num=prompt("enter the noof Objects:");
        for(j=0;j<num;j++){
        for(k=0;k<keys.length;k++){
            console.log(keys);
            console.log(keys[k]);
            console.log(keys[k],fieldname,"=============");
          //switch(keys[k]){
            //case keys[k]="doctor":
            if(keys[k]==fieldname&&fieldname==doctor){
                var doctorid=prompt("enter the doctorid:");
                var name=prompt("enter the doctorname:");
                var mobileno=prompt("enter the mobileno:");
                var specialisation=prompt("enter the specialisation:");
                hospitaldetails.doctor=funfordoctor(doctorid, name, mobileno, specialisation, hospitaldetails.doctor);
                console.log("doctors",hospitaldetails.doctor);
                break;
            }

            //case keys[k]="patient":
            if(keys[k]==fieldname&&fieldname==patient){
                var patientid=prompt("enter the patientid:");
                var doctorid=prompt("enter the doctorid:");
                var name=prompt("enter the patientname:");
                var mobileno=prompt("enter the mobileno:");
                var age=prompt("enter the age:");

                hospitaldetails.patient=funforpatient(patientid, doctorid, name,mobileno,age, hospitaldetails.patient);
                console.log("patients",hospitaldetails.patient);
                break;
            }
            //case keys[k]="disease": 
            if(keys[k]==fieldname&&fieldname==disease){              
                var doctorid=prompt("enter the docotid:");
                var feaver=prompt("enter yes or no:");
                var cold=prompt("enter yes or no:");
                var cough=prompt("enter yes or no:");
                hospitaldetails.disease=funfordisease(doctorid, feaver,cold,cough,hospitaldetails.disease); 
                console.log("disease",hospitaldetails.disease);
                break;
            }
          //}
        }

    }
}
 
function funfordoctor(doctorid, name,mobileno,specialisation,doctor){
    if(doctor.length>0){
        var flag=true;
        for(i=0;i<doctor.length;i++){
            if(doctorid==doctor[i].doctorid){
                doctor[i].name=name;
                doctor[i].mobileno=mobileno;
                doctor[i].specialisation=specialisation;
                flag=false;
                break;
            }
            if(flag){
                doctor.push({doctorid:doctorid,name:name,mobileno:mobileno,specialisation:specialisation});
            }
        }
    }
    return doctor;
}
function funforpatient(patientid,doctorid,name,mobileno,age,patient){
    if(patient.length>0){
        var flag=true;
        for(i=0;i<patient.length;i++){
            if(patientid==patient[i].patientid){
                patient[i].doctorid=doctorid;
                patient[i].name=name;
                patient[i].mobileno=mobileno;
                patient[i].age=age;
                flag=false;
                break;
            }
            if(flag){
                patient.push({patientid:patientid,doctorid:doctorid,name:name,mobileno:mobileno,age:age});
            }
        }
    }
    return patient;
}
function funfordisease(patientid,feaver,cold,cough){
    if(disease.length>0){
        var flag=true;
        //var patientid=true;
        for(i=0;i<disease.length;i++){
            if(patientid==patient[i].patientid){
                disease[i].feaver=feaver;
                disease[i].cold=cold;
                disease[i].cough=cough;
            }
            if(flag){
                console.log({patientid:patientid,feaver:feaver,cold:cold,cough:cough});
            }
        }
    }
    return disease;
}