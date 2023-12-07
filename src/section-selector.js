export const SectionSelector = (props) => {
    const createArray = length => [...Array(length)];
    const essayHandler = (selectedEssay) => (props.onFocused(selectedEssay));

    return( 
        <div className='essay-selector'>
          <div className='toolbar'>
            <p className='toolbar-info'>Section Selector</p>
                <Divider />
            {createArray(5).map((n, i) => (
                <button key={i} 
                    className={`toolbar-item spaced ${props.essayFocused === i+1 ? 'selected' : ''}`}
                    onClick={() => essayHandler(i+1)}
                >
                    <i className={`format essay${i+1}-icon`}></i>
                </button>
            ))}
          </div>
        </div>
    );
}

function Divider() {
    return <div className="divider" />;
  }

