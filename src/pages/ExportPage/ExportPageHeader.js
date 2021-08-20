import Paper from '@material-ui/core/Paper'

export default function ExportPageHeader(props){
    const {data} = props;
    return(
        <div className = 'header'>
            <h1 className = 'headerTitle'>Export</h1>
            <Paper style={{marginLeft: 10, paddingLeft: 5, paddingRight: 5, backgroundColor: '#1C3847',
                color: '#FFF', border: '1px solid #0D2735'}}>
                {data.name}
            </Paper>
        </div>
    );
}