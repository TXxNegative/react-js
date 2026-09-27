const App=()=>{
  return(
    <div>
      <p><mark style={{fontSize:20}}><b>useState</b></mark> - state ko manage karna ke liye. 
      </p>
      <br />
      <p><mark style={{fontSize:20}}><b>useEffect</b></mark> - side effects handle karne ke liye (jaise Api call,DOM manipulation, event listner).</p>
      <br />
      <p><mark style={{fontSize:20}}><b>useContext</b></mark> - global state ko consume karne ke liye without prop drilling.</p>
      <br />
      <p><mark style={{fontSize:20}}><b>useReducer</b></mark> - complex state management ke liye (redux jaisa chota version).</p>
      <br />
      <p><mark style={{fontSize:20}}><b>useRef</b></mark> - multable values hold karne ke liye jo re-render trigger na karein, ya dom access karne ke liye.</p>
      <br />
      <p><b><span style={{fontSize:20, backgroundColor:"yellow"}}>useMemo & useCallback</span></b> - optimization ke  liye, unnecessary re-render avoid karne ke liye.</p>
    </div>
  )
}

export default App