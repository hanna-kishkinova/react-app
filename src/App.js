import './App.css';
import Counter from "./components/counter/counter";
import SearchBox from "./components/search/search-box";
import {useState} from "react";
import GenreSelect from "./components/genre-select/genre-select";

function App() {

    const [searchQuery, setSearchQuery] = useState();
    const handleSearch = (query) => setSearchQuery(query);

    const [selectedGenre, setSelectedGenre] = useState('Action');

    const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'];

    const handleGenreSelect = (genre) => {
        setSelectedGenre(genre);
    };

    return (
        <div className="App container">
            <header className="app-header">
                <div className="header-wrapper">
                    <h1>FIND YOUR MOViE</h1>
                    <section className="search-box">
                        <div><SearchBox initialQuery="The Bad Guys 2 (2025)" onSearch={handleSearch}/></div>
                        {searchQuery && (
                            <p style={{marginTop: '10px'}}>
                                Search triggered for: <strong>{searchQuery}</strong>
                            </p>
                        )}
                    </section>
                </div>
            </header>
            <main>
                <section className="counter-block">
                    <div><Counter initialValue={5}/></div>
                </section>
                <section>
                    <div className="controls-block">
                        <div className="genre-select-block">
                            <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect}/>
                            <p style={{ marginTop: '10px', color: 'white' }}>
                                Selected Genre: <strong>{selectedGenre}</strong>
                            </p>
                        </div>
                        <div></div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
