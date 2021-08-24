export function read_csv(file, row_sep='\n', col_sep=',', isHeader=true){
    let rows = null;
    function defineRows(){
        let rt = ""
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = () => {
            rt = reader.result;

            return rt;
        };
    }
    defineRows();
    let _header = []
    let data = []
    for(const[index, row] of rows.entries()){
        rows[index] = row.split(col_sep);
    }
    if(isHeader === true){
        _header = rows.shift();
    }
    else{
        for(let i = 0; i < rows[0].length; i++){
            _header.append(toString(i));
        }
    }

    for(let row of rows){
        let datum = {}
        for(let i = 0; i < rows.length; i++){
            datum[_header[i]] = row[i];
        }
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
            _header.append(toString(i));
        }
    }

    for(let datum of data){
        let user = []
        let roles = []
        user.append(datum[_header[0]]);
        user.append(datum[_header[1]]);
        user.append(datum[_header[2]]);
        for(let i = 3; i < 9; i++){
            if(datum[_header[i]].toLowerCase().trim() === 'o'){
                roles.append(true);
            }
            else{
                roles.append(false);
            }
        }
        user.append(roles);

        rt.append(user);
    }

    return rt;
}