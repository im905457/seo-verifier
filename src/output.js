const fs = require('fs');

const print = (issues, output) => {
    //return new Promise(function (resolve, reject) {
        if(typeof output == "string"){
            output = output + ".txt";
            fs.writeFile(output, JSON.stringify(issues), function (error, data){
                if(error){
                    console.log({status: false, message: error });
                    return {status: false, message: error };
                }else{
                    return issues;
                }
            })
        }else{
            console.log(issues);
            return issues;
        }
    //});
};

module.exports = print;