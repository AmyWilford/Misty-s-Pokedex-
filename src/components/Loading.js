const Loading = () => {
    return(
        <div className = "text-center mt-5">
            <div className ="spinner-grow text-danger" role="status">
            </div>
            <div className= "visually-hidden my-3 text-danger">catching your pokémon</div>
        </div>
    );
}

export default Loading;