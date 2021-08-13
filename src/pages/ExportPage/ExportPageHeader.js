import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

export default function ExportPageHeader(props){
    const {data} = props;
    return(
        <div className = 'exportHeader'>
            <Grid container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={3}>
                <Grid item>
                    Export
                </Grid>
                <Grid item>
                    <Paper style={{paddingLeft: 5, paddingRight: 5, backgroundColor: '#1C3847',
                        color: '#FFF', border: '1px solid #0D2735'}}>
                        {data[0].source.name}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}