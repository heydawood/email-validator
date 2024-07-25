let result = {
    
        "tag": "",
        "free": true,
        "role": false,
        "user": "dawood_faisal",
        "email": "dawood_faisal@yahoo.com",
        "score": 0.64,
        "state": "deliverable",
        "domain": "yahoo.com",
        "reason": "valid_mailbox",
        "mx_found": true,
        "catch_all": null,
        "disposable": false,
        "smtp_check": true,
        "did_you_mean": "",
        "format_valid": true
      
}
let str = ``
for (key of Object.keys(result)){
    str = str + `<div>${key}: ${result[key]}</div>`
}
console.log(str)