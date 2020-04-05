const strings = []

function Guitar(){
	return(
		<Guitar>
		{strings.map(note => <String note={note}/>)}
		</Guitar>
	)
}
