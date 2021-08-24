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
    return data;
}

export function transformData(data, isHeader=true){
    let _header=[]
    let rt = []
    if(isHeader === true){
        _header = ['UserName', 'Email', 'Password', 'Automation', 'RemoteAccess', 'ResourceAdmin', 'SuperUser', 'Admin', 'PowerUser'];
    }
    else{
        for(let i = 0; i < 9; i++){
            _header.push(toString(i));
        }
    }

    for(let datum of data){
        let user = []
        let roles = []
        user.push(datum[_header[0]]);
        user.push(datum[_header[1]]);
        user.push(datum[_header[2]]);
        for(let i = 3; i < 9; i++){
            if(datum[_header[i]].toLowerCase().trim() === 'o'){
                roles.push(true);
            }
            else{
                roles.push(false);
            }
        }
        user.push(roles);

        rt.push(user);
    }

    return rt;
}