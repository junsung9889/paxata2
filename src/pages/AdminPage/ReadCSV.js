export async function read_csv(file, row_sep='\n', col_sep=',', isHeader=true){
    const rows = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = () =>{
            const result = reader.result.split(row_sep);
            resolve(result);
        };
    });
    let _header = []
    for(const[index, row] of rows.entries()){
        rows[index] = row.trim().split(col_sep);
    }
    if(isHeader === true){
        for(let r of rows.shift()){
            _header.push(r.trim());
        }
    }
    else{
        for(let i = 0; i < rows[0].length; i++){
            _header.push(toString(i));
        }
    }
    
    let data = []
    for(let row of rows.slice(0,-1)){
        let datum = {}
        for(let i = 0; i < rows[0].length; i++){
            datum[_header[i]] = row[i];
        }
        data.push(datum);
    }
    console.log(data);
    return data;
}

export function transformData(data, roles, names){
    function checkValid(name, email, password){
        let isNameValid = true;
        if(names.includes(name)){
            isNameValid = false;
        }
        const password_re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*+=]).{8,}$/;
        const isPwValid = password_re.test(password);

        const email_re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isEmailValid = email_re.test(email.toLowerCase());

        return [isNameValid, isPwValid, isEmailValid];
    }

    let rt = []
    let name_list = []
    let err_user = []
    let err_email = []
    let err_password = []
    let _valid = true

    const keys = Object.keys(data[0]);
    console.log(keys);

    if(!(keys.includes('UserName'))){
        throw 'WorngTemplate';
    }
    if(!(keys.includes('Email'))){
        throw 'WorngTemplate';
    }
    if(!(keys.includes('Password'))){
        throw 'WorngTemplate';
    }
    for(let role of roles){
        if(!(keys.includes(role))){
            throw 'WrongTemplate';
        }
    }


    for(let datum of data){
        let user = []
        let _roles = []

        if(name_list.includes(datum['UserName'])){
            throw `Duplicate User Name : ${datum['UserName']}`;
        }
        name_list.push(datum['UserName']);
        const valid = checkValid(datum['UserName'], datum['Email'], datum['Password']);

        if(!valid[0]){
            err_user.push(datum['UserName']);
            _valid = false;
        }
        if(!valid[1]){
            err_email.push(datum['UserName']);
            _valid = false;
        }
        if(!valid[2]){
            err_password.push(datum['UserName']);
            _valid = false;
        }

        user.push(datum['UserName']);
        user.push(datum['Email']);
        user.push(datum['Password']);

        for(let i = 0; i < roles.length; i++){
            if(datum[roles[i]].toLowerCase().trim() === 'o'){
                _roles.push(true);
            }
            else{
                _roles.push(false);
            }
        }
        user.push(_roles);

        rt.push(user);
    }

    if(!_valid){
        throw `Error with\n\nUser Name:\n${err_user.join(', ')}\n\nEmail:\n${err_email.join(', ')}\n\nPassword:\n${err_password.join(', ')}`
    }

    return rt;
}